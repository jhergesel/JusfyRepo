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
  filterQueriesByDocumentType,
  toggleQuery,
} from '../../../components/utils/queryUtils';
import { validateDocument } from '../../../components/utils/documentValidator';
import {
  getAcceptedTerms,
  setAcceptedTermsStorage,
} from '../../../components/utils/storageUtils';
import { processQueries } from '../../../components/service';
import { toast } from 'react-toastify';
import { IDocument } from '../../../components/BaseInputs/types.BaseInputs';

import { loadProducts } from '../../../JusfinderShared/services/loadProducts';
import { EventsSegment } from '../../../../../helpers/EventsSegmentsCalculators';
import { Context } from '../../../JusfinderShared/constants/EnumContext';
import { pluralize } from '../../utils/utils.jusfinder';
type OpenModalFn = (...args: any[]) => void;

interface JusfinderContextType {
  openModal?: OpenModalFn;
  creditAvailable?: number;
  setPage?: (page: string) => void;
  modal: {
    open: boolean;
    type: string | null;
    config: any;
  };
}

const useMultipleQueries = () => {
  const [document, setDocument] = useState<string>('');
  const [documentType, setDocumentType] = useState<IDocument>(
    DOCUMENTS_ENUM.CPF as IDocument,
  );
  const { openModal, creditAvailable, setPage, modal } = useContext(
    jusfinderContext,
  ) as JusfinderContextType;
  const [error, setError] = useState<string>('');
  const [errorTerm, setErrorTerm] = useState<string>('');
  const [acceptedTerm, setAcceptedTerm] = useState<boolean>(getAcceptedTerms());
  const [queries, setQueries] = useState<string[]>([]);
  const [queriesRenders, setQueriesRenders] = useState<ICardOption[]>(
    filterQueriesByDocumentType(DOCUMENTS_ENUM.CPF as IDocument),
  );
  const [creditsMultipleQueries, setCreditsMultipleQueries] = useState<number>(
    creditAvailable ?? 0,
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
    () => sumCreditsQueriesSelected > creditsMultipleQueries,
    [creditsMultipleQueries, sumCreditsQueriesSelected],
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
        isUniversal: true,
      });

      HandleEvent('Queries Selected', {
        queries: queries,
        isUniversal: true,
      });
    } catch (error) {
      toast.error('Erro ao consultar documentos. Tente novamente mais tarde.');
      const errorMessage =
        error instanceof Error ? error?.message : JSON.stringify(error);
      HandleEvent('Error Submit Queries', {
        error: errorMessage,
        isUniversal: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const openModalBuyCredits = () => {
    openModal('BUY_CREDITS_MODAL', {
      context: Context.MULTIPLE_QUERIES,
      creditQuantity: sumCreditsQueriesSelected - creditsMultipleQueries,
    });

    HandleEvent(' Buy Credits Modal Opened', {
      isUniversal: true,
    });
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

    if (sumCreditsQueriesSelected > creditsMultipleQueries) {
      openModalBuyCredits();
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

  const chooseQueries = (featureTypeName: string) => {
    setQueries(toggleQuery(queries, featureTypeName));
  };

  const chooseDocumentType = (type: IDocument) => {
    setDocumentType(type);
    setQueriesRenders(filterQueriesByDocumentType(type));
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

  const labelButton = useMemo(() => {
    const sumCreditIsMoreThanZero = sumCreditsQueriesSelected > 0;

    if (sumCreditIsMoreThanZero) {
      return `Consultar por ${pluralize(
        'crédito',
        sumCreditsQueriesSelected,
        'créditos',
      )}`;
    }
    return 'Consultar';
  }, [sumCreditsQueriesSelected]);

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
    const allQueries = filterQueriesByDocumentType(documentType);

    if (!search.trim()) {
      setQueriesRenders(allQueries);
      return;
    }

    const filtered = allQueries.filter((query) =>
      query.name_query.toLowerCase().includes(search.toLowerCase()),
    );

    setQueriesRenders(filtered);
  }, [search, documentType]);

  useEffect(() => {
    const refetch = async () => {
      const response = await loadProducts();

      setCreditsMultipleQueries(response.data.availableCredits);
    };

    refetch();
  }, [modal.open, loading]);

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
    openModalBuyCredits,
    creditsMultipleQueries,
    labelButton,
    onChangeSearch,
    search,
    loading,
    backPrevPage,
  };
};

export default useMultipleQueries;
