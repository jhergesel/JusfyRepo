import {
  Container,
  Content,
  ContentInputs,
  WrapperButton,
  WrapperForm,
} from './MultipleQueriesPage.styles';

import Button from '../../../../../components/flat/ui/Button';

import useMultipleQueries from './useMultipleQueries';
import { HeaderMultipleQueries } from '../../../components/HeaderMultipleQueries/Header';
import { DocumentType } from '../../../components/BaseInputs/DocumentType';
import { OPTIONS } from '../../../JusfinderUnivesal/components/MultipleQueries/constants';
import { Document } from '../../../components/BaseInputs/Document';
import { Terms } from '../../../components/BaseInputs/Terms';
import { Card } from '../../Pages/components/Card';
import { TitleCard } from '../../Pages/components/TitleCard';
import { WrapperCardsQueries } from '../../../JusfinderUnivesal/components/MultipleQueries/MultipleQueriesPage.styles';
import { CardOption } from '../../../components/CardOptionQuery/CardOption';
import { FilterSearchComponent } from '../../../../../components/Filters/FilterSearch/FilterSearch';
import { EmptyStateFilters } from '../QueryHistory/components/EmptyStateFilters';
import ReactLoading from 'react-loading';
import { checkDocumentType } from '../../../components/utils/queryUtils';
export const MultipleQueriesPage = () => {
  const {
    documentType,
    chooseDocumentType,
    error,
    document,
    onChangeQueryInput,
    acceptedTerm,
    onClickAcceptTerm,
    errorTerm,
    queriesRenders,
    chooseQueries,
    queries,
    submitQueries,
    search,
    onChangeSearch,
    backPrevPage,
    loading,
  } = useMultipleQueries();

  return (
    <Container>
      <Content>
        <HeaderMultipleQueries title={'Nova Consulta'} subtitle={'jusfinder'} />
      </Content>

      <WrapperForm>
        <Card>
          <TitleCard title={'Dados para consulta'} />

          <ContentInputs>
            <DocumentType
              optionsDocument={OPTIONS}
              actived={documentType}
              label={'Formato do documento'}
              setDocumentType={chooseDocumentType}
            />

            <Document
              label={'Dados para a consulta'}
              documentType={checkDocumentType(documentType)}
              error={error}
              value={document}
              onChange={onChangeQueryInput}
            />
          </ContentInputs>

          <Terms
            acceptTerm={acceptedTerm}
            setAcceptTerm={onClickAcceptTerm}
            error={errorTerm}
          />
        </Card>

        <Card>
          <TitleCard title={'Seleção de consultas'} />
          <FilterSearchComponent
            search={search}
            onChange={(e) => onChangeSearch(e.target.value)}
            placeholder="Pesquise título"
          />

          {search && queriesRenders?.length === 0 && <EmptyStateFilters />}
          <WrapperCardsQueries>
            {queriesRenders?.map((item, i) => (
              <CardOption
                checked={queries.includes(item.feature_type_name)}
                description={item.description}
                isUniversal={false}
                universal_price={item.universal_price}
                feature_type_name={item.feature_type_name}
                name_query={item.name_query}
                credits={item.credits}
                valueCredits={item.valueCredits}
                text_info_credit={item.text_info_credit}
                key={item.feature_type_name}
                onChange={() =>
                  chooseQueries(
                    item.feature_type_name,
                    item.valueCredits,
                    item?.price,
                    item?.name_query,
                  )
                }
              />
            ))}
          </WrapperCardsQueries>
        </Card>
      </WrapperForm>
      <WrapperButton>
        <Button
          padding={'10px 32px'}
          borderRadius={'5px'}
          backgroundColor={'rgb(253, 253, 255)'}
          color={'rgb(17, 18, 25)'}
          border={'1px solid rgb(202, 201, 207)'}
          onClick={backPrevPage}
        >
          Voltar
        </Button>
        <Button
          padding={'10px 32px'}
          borderRadius={'5px'}
          onClick={submitQueries}
        >
          {loading ? (
            <ReactLoading
              type={'spinningBubbles'}
              color={'#fff'}
              height={20}
              width={20}
            />
          ) : (
            'Consultar'
          )}
        </Button>
      </WrapperButton>
    </Container>
  );
};
