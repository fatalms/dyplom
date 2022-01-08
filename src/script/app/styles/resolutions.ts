interface IResolutionProps {
  width: number;
  height: number;
}

interface IResolution {
  HD?: IResolutionProps;
  FHD?: IResolutionProps;
  QHD?: IResolutionProps;
  UHD?: IResolutionProps;
}

//by default in browser and panel quick access we lose 120 px by vertical
export const resolutions: IResolution = {
  HD: {
    width: 1280,
    height: 600,
  },
  FHD: {
    width: 1920,
    height: 960,
  },
  QHD: {
    width: 2560,
    height: 1320,
  },
  UHD: {
    width: 3840,
    height: 2040,
  },
};
