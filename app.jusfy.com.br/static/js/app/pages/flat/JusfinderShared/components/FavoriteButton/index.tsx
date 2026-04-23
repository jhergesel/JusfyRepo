import { Icon, FavoriteButtonContainer } from './FavoriteButton.styles';
import { toAbsoluteUrl } from '../../../../../../_metronic/_helpers';
import { ButtonHTMLAttributes } from 'react';

type FavoriteButtonProps = {
  favorited: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const FavoriteButton = ({ favorited, ...rest }: FavoriteButtonProps) => {
  return (
    <FavoriteButtonContainer {...rest}>
      <Icon
        src={toAbsoluteUrl(
          `/media/jusfinderuniversal/${
            favorited ? 'star-filled.svg' : 'star-empty.svg'
          }`,
        )}
        size={'18px'}
      />
    </FavoriteButtonContainer>
  );
};
