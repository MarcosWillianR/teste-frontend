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
  filterName: string | number;
}

const Icon: React.FC<IconProps> = ({ filterName }) => {
  let RenderedIcon;

  switch (filterName) {
    case 'Em execução':
    case 1: {
      RenderedIcon = <PaperPlane size={16} />;
      break;
    }
    case 'Ativa':
    case 2: {
      RenderedIcon = <PlayCircle size={16} />;
      break;
    }
    case 'Configurando':
    case 3: {
      RenderedIcon = <Pen size={16} />;
      break;
    }
    case 'Ociosa':
    case 4: {
      RenderedIcon = <Bed size={16} />;
      break;
    }
    case 'Concluída':
    case 5: {
      RenderedIcon = <Check size={16} />;
      break;
    }
    default:
      RenderedIcon = <Table size={16} />;
  }

  return RenderedIcon;
};

export default Icon;
