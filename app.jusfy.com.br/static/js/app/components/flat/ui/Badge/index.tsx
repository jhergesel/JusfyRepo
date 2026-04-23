import * as S from "./Badge.styles";

export type BadgeProps = {
  content: string;
  showAvatar?: boolean;
  className?: string;
};

function Badge({ content, showAvatar = true, className }: BadgeProps) {
  const firstLetter = content && content.length > 0 ? content[0].toUpperCase() : "";

  return (
    <S.Badge className={className}>
      {showAvatar && <S.Avatar>{firstLetter}</S.Avatar>}
      {content}
    </S.Badge>
  );
}

export default Badge;
