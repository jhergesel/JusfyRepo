import { CARD_OPTIONS } from '../../JusfinderUnivesal/components/MultipleQueries/constants';
import { FeatureType, ICardOption } from '../CardOptionQuery/types.CardOption';
import { IDocument } from '../BaseInputs/types.BaseInputs';
import { DOCUMENTS_ENUM, QUERIES_EVENTS_KEYS } from '../constants';

export const calculateTotalCredits = (selectedQueries: string[]): number => {
  return CARD_OPTIONS.filter((item) =>
    selectedQueries.includes(item.feature_type_name),
  ).reduce((acc, item) => acc + (item.universal_price ?? 0), 0);
};

export const filterQueriesByDocumentType = (
  documentType: IDocument,
): ICardOption[] => {
  return CARD_OPTIONS.filter((item) => {
    const docs = Array.isArray(item.documents)
      ? item.documents
      : [item.documents];

    return docs.includes((documentType as unknown) as FeatureType);
  });
};

export const toggleQuery = (
  queries: string[],
  featureTypeName: string,
): string[] => {
  const isChecked = queries.includes(featureTypeName);

  if (isChecked) {
    return queries.filter((item) => item !== featureTypeName);
  }

  return [...queries, featureTypeName];
};

export function pluralize(word, count, pluralForm = `${word}s`) {
  const plural = pluralForm;
  return `${count} ${count === 1 ? word : plural}`;
}

export const filterQueriesByDocumentTypeQueries = (
  documentType: IDocument,
  data,
) => {
  const queries = filterQueriesByDocumentType(documentType);

  return queries.map((query) => {
    const matched = data?.find((item) => {
      return item.identification === query.feature_type_name;
    });

    const hasKey = QUERIES_EVENTS_KEYS.includes(query.feature_type_name);

    const queryEconomicGroup = data?.find((item) => {
      return item.identification === 'economic_group';
    });
    const credit = hasKey ? queryEconomicGroup?.credit : matched?.credit;
    const price = hasKey ? queryEconomicGroup?.price : matched?.price;
    return {
      ...query,
      valueCredits: credit,
      price: price,
      text_info_credit: `${pluralize(
        'crédito',
        credit,
        'créditos',
      )} disponíveis`,
    };
  });
};

export { maskLicensePlate, validateLicensePlate } from './licensePlateUtils';

export const checkDocumentType = (documentType: IDocument): string => {
  if (documentType === DOCUMENTS_ENUM.PLATE) {
    return 'Placa';
  }

  return documentType;
};
