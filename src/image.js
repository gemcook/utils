export function getCreditBrand(brandName) {
  let result;
  switch (brandName) {
    case 'Visa': {
      result =
        'https://s3-ap-northeast-1.amazonaws.com/assets.gemcook.com/icons/cards/visa.svg';
      break;
    }
    case 'MasterCard': {
      result =
        'https://s3-ap-northeast-1.amazonaws.com/assets.gemcook.com/icons/cards/master.svg';
      break;
    }
    case 'JCB': {
      result =
        'https://s3-ap-northeast-1.amazonaws.com/assets.gemcook.com/icons/cards/jcb.svg';
      break;
    }
    case 'American Express': {
      result =
        'https://s3-ap-northeast-1.amazonaws.com/assets.gemcook.com/icons/cards/amex.svg';
      break;
    }
    case 'Diners Club': {
      result =
        'https://s3-ap-northeast-1.amazonaws.com/assets.gemcook.com/icons/cards/diners.svg';
      break;
    }
    case 'Discover': {
      result =
        'https://s3-ap-northeast-1.amazonaws.com/assets.gemcook.com/icons/cards/discover.svg';
      break;
    }
    case 'UnionPay': {
      result =
        'https://s3-ap-northeast-1.amazonaws.com/assets.gemcook.com/icons/cards/normal.svg';
      break;
    }
    case 'Unknown': {
      result =
        'https://s3-ap-northeast-1.amazonaws.com/assets.gemcook.com/icons/cards/normal.svg';
      break;
    }
    default: {
      break;
    }
  }
  return result;
}
