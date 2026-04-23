import { cnpj, cpf } from 'cpf-cnpj-validator';
import { ERRORS } from '../constants';
import { IDocument } from '../BaseInputs/types.BaseInputs';
import { validateLicensePlate } from './licensePlateUtils';

export const validateCpf = (document: string): boolean => {
  return cpf.isValid(document);
};

export const validateCNPJ = (document: string): boolean => {
  return cnpj.isValid(document);
};

export const validateDocument = (
  document: string,
  documentType: IDocument,
): { isValid: boolean; error: string } => {
  const validations = {
    CPF: validateCpf,
    CNPJ: validateCNPJ,
    PLATE: validateLicensePlate,
  };

  const validator = validations[documentType];
  const isValid = validator ? validator(document) : false;

  return {
    isValid,
    error: isValid ? '' : ERRORS.get(documentType),
  };
};
