export function getListItemStatusName(status: number): string {
  switch (status) {
    case 1:
      return 'Enviando';
    case 2:
      return 'Ativadas';
    case 3:
      return 'Configurando';
    case 4:
      return 'Ociosa';
    case 5:
      return 'Concluída';
    default:
      return 'Todas';
  }
}
