/**
 * Formata a data de renovação de um desafio para exibição
 * @param {string} nextAvailableAt - Data ISO string de quando o desafio estará disponível novamente
 * @returns {string} String formatada: "Amanhã", "em 2 dias", "em 7 dias", etc.
 */
export const formatNextAvailableDate = (nextAvailableAt) => {
    if (!nextAvailableAt) return '';

    try {
        const nextDate = new Date(nextAvailableAt);
        const now = new Date();

        // Comparar usando meia-noite em UTC para evitar desvios de fuso horário
        const dayMs = 1000 * 60 * 60 * 24;
        const nextUtcMidnight = Date.UTC(
            nextDate.getUTCFullYear(),
            nextDate.getUTCMonth(),
            nextDate.getUTCDate()
        );
        const todayUtcMidnight = Date.UTC(
            now.getUTCFullYear(),
            now.getUTCMonth(),
            now.getUTCDate()
        );

        const diffInMs = nextUtcMidnight - todayUtcMidnight;
        const diffInDays = Math.round(diffInMs / dayMs);

        // console.debug('formatNextAvailableDate UTC:', { nextUtcMidnight: new Date(nextUtcMidnight), todayUtcMidnight: new Date(todayUtcMidnight), diffInDays });

        // Se for amanhã
        if (diffInDays === 1) {
            return 'Amanhã';
        }

        // Se for em N dias (futuro)
        if (diffInDays > 1) {
            return `em ${diffInDays} dias`;
        }

        // Se já passou ou é hoje, retorna vazio
        return '';
    } catch (error) {
        console.error('Erro ao formatar data de renovação:', error);
        return '';
    }
};