import React from 'react';

import {
  Bed,
  Check,
  PaperPlane,
  Pen,
  PlayCircle,
  Table,
} from '../components/icons';

interface IconProps {
  filterName: string;
}

const Icon: React.FC<IconProps> = ({ filterName }) => {
  let RenderedIcon;

  switch (filterName) {
    case 'Em execução': {
      RenderedIcon = <PaperPlane size={16} />;
      break;
    }
    case 'Ativa': {
      RenderedIcon = <PlayCircle size={16} />;
      break;
    }
    case 'Configurando': {
      RenderedIcon = <Pen size={16} />;
      break;
    }
    case 'Ociosa': {
      RenderedIcon = <Bed size={16} />;
      break;
    }
    case 'Concluída': {
      RenderedIcon = <Check size={16} />;
      break;
    }
    default:
      RenderedIcon = <Table size={16} />;
  }

  return RenderedIcon;
};

export default Icon;
