import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { DOCUMENTS_ENUM, ERRORS, MASKS } from '../../../components/constants';
import { jusfinderContext } from '../../context';
import { ICardOption } from '../../../components/CardOptionQuery/types.CardOption';
import {
  calculateTotalCredits,
  filterQueriesByDocumentTypeQueries,
  toggleQuery,
} from '../../../components/utils/queryUtils';
import { validateDocument } from '../../../components/utils/documentValidator';
import {
  getAcceptedTerms,
  setAcceptedTermsStorage,
} from '../../../components/utils/storageUtils';
import { ECONOMIC_GROUPS } from './constants';
import { processQueries } from '../../../components/service';
import { toast } from 'react-toastify';
import { IDocument } from '../../../components/BaseInputs/types.BaseInputs';
import { EventsSegment } from '../../../../../helpers/EventsSegmentsCalculators';
import { Context } from '../../../JusfinderShared/constants/EnumContext';
type OpenModalFn = (...args: any[]) => void;

interface JusfinderContextType {
  openModal: OpenModalFn;
  creditAvailable: number;
  data: any;
  setPage: (page: string) => void;
}

const useMultipleQueries = () => {
  const { openModal, creditAvailable, data, setPage } = useContext(
    jusfinderContext,
  ) as JusfinderContextType;

  const [document, setDocument] = useState<string>('');
  const [documentType, setDocumentType] = useState<IDocument>(
    DOCUMENTS_ENUM.CPF as IDocument,
  );
  const [error, setError] = useState<string>('');
  const [errorTerm, setErrorTerm] = useState<string>('');
  const [acceptedTerm, setAcceptedTerm] = useState<boolean>(getAcceptedTerms());
  const [queries, setQueries] = useState<string[]>([]);
  const [queriesRenders, setQueriesRenders] = useState<ICardOption[]>(
    filterQueriesByDocumentTypeQueries(DOCUMENTS_ENUM.CPF as IDocument, data),
  );
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const { HandleEvent } = EventsSegment();

  const onChangeQueryInput = useCallback(
    (value: string) => {
      const maskFn = MASKS.get(documentType);
      const maskValue = maskFn ? maskFn(value) : value;
      setDocument(maskValue);
    },
    [documentType],
  );
  const sumCreditsQueriesSelected = useMemo(
    () => calculateTotalCredits(queries),
    [queries],
  );

  const isVisibleAlert = useMemo(
    () => sumCreditsQueriesSelected > creditAvailable,
    [creditAvailable, sumCreditsQueriesSelected],
  );

  const processQueriesSubmpit = async () => {
    setLoading(true);
    try {
      await processQueries({
        documentType,
        document,
        queries,
      });

      openModal('AVAILABLE_SOON_MODAL');

      HandleEvent('Document Type Selected', {
        documentType: documentType,
        isUniversal: false,
      });

      HandleEvent('Queries Selected', {
        queries: queries,
        isUniversal: false,
      });
    } catch (error) {
      toast.error('Erro ao consultar documentos. Tente novamente mais tarde.');
      const errorMessage =
        error instanceof Error ? error?.message : JSON.stringify(error);

      HandleEvent('Error Submit Queries', {
        error: errorMessage,
        isUniversal: false,
      });
    } finally {
      setLoading(false);
    }
  };

  const submitQueries = async () => {
    const { isValid, error: validationError } = validateDocument(
      document,
      documentType,
    );

    if (!isValid) {
      setError(validationError);
      return;
    }

    if (!acceptedTerm) {
      setErrorTerm(ERRORS.get('TERMS'));
      return;
    }

    if (queries.length === 0)
      return toast.error('Selecione pelo menos uma consulta para continuar.');

    await processQueriesSubmpit();
  };

  const onClickAcceptTerm = () => {
    const newValue = !acceptedTerm;

    setAcceptedTerm(newValue);
    setAcceptedTermsStorage(newValue);
  };

  const chooseQueries = (
    featureTypeName: string,
    credits: number,
    price: string,
    name_query?: string,
  ) => {
    if (credits <= 0) {
      const queryOption = {
        name: name_query,
        price: price,
        identification: ECONOMIC_GROUPS.includes(featureTypeName)
          ? 'economic_group'
          : featureTypeName,
      };
      openModal('BUY_CREDITS_MODAL', {
        queryOption,
        context: Context.MULTIPLE_QUERIES,
      });
      HandleEvent('Opened Modal Buy Credits', {
        isUniversal: false,
        query_type: queryOption.identification,
      });
      return;
    }
    setQueries(toggleQuery(queries, featureTypeName));
  };

  const chooseDocumentType = (type: IDocument) => {
    setDocumentType(type);

    const queriesFiltered = filterQueriesByDocumentTypeQueries(type, data);

    setQueriesRenders(queriesFiltered);

    setQueries([]);
    setDocument('');
  };

  useEffect(() => {
    setError('');
  }, [document]);

  useEffect(() => {
    if (acceptedTerm) {
      setErrorTerm('');
    }
  }, [acceptedTerm]);

  const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const debouncedSearch = useRef(
    debounce((value: string) => {
      setSearch(value);
    }, 100),
  ).current;

  const onChangeSearch = useCallback(
    (value: string) => {
      debouncedSearch(value);
    },
    [debouncedSearch],
  );

  useEffect(() => {
    const allQueries = filterQueriesByDocumentTypeQueries(documentType, data);

    if (!search.trim()) {
      setQueriesRenders(allQueries);
      return;
    }

    const filtered = allQueries.filter((query) =>
      query.name_query.toLowerCase().includes(search.toLowerCase()),
    );

    setQueriesRenders(filtered);
  }, [search, documentType, data]);

  const backPrevPage = () => {
    setPage('query');
  };

  return {
    document,
    documentType,
    error,
    errorTerm,
    acceptedTerm,
    queries,
    queriesRenders,
    sumCreditsQueriesSelected,
    isVisibleAlert,
    onChangeQueryInput,
    submitQueries,
    onClickAcceptTerm,
    chooseQueries,
    chooseDocumentType,
    openModal,
    creditAvailable,
    search,
    onChangeSearch,
    backPrevPage,
    loading,
  };
};

export default useMultipleQueries;
