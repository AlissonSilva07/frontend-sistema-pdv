export function saudacaoMessage(): string {
    let h = new Date().getHours();
    return (h <= 5) ? 'Boa madrugada' :
           (h < 12) ? 'Bom dia' :
           (h < 18) ? 'Boa tarde' :
           'Boa noite';
  }