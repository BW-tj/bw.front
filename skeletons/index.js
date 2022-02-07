import ContentLoader from 'react-content-loader';

const Skeleton = ({
  height = 11,
  width = 200,
  radius = 3,
}) => (
  <ContentLoader
    speed={0.5}
    width={width}
    height={height}
    backgroundColor="#DCDCDC"
    foregroundColor="#F6F6F6"
  >
    <rect x="0" y="0" rx={radius} ry={radius} width={width} height={height} />
  </ContentLoader>
);

export const ProductsSkeleton = () => {
  return (
    <>
      <Skeleton width="100%" height={406} radius={4} />
      <Skeleton width="100%" height={406} radius={4} />
      <Skeleton width="100%" height={406} radius={4} />
      <Skeleton width="100%" height={406} radius={4} />
      <Skeleton width="100%" height={406} radius={4} />
      <Skeleton width="100%" height={406} radius={4} />
      <Skeleton width="100%" height={406} radius={4} />
      <Skeleton width="100%" height={406} radius={4} />
    </>
  );
};

export const BannerSkeleton = () => {
  return (
    <>
      <Skeleton width="100%" height={350} radius={4} />
      <Skeleton width="100%" height={350} radius={4} />
      <Skeleton width="100%" height={350} radius={4} />
    </>
  );
};

export const TitleSkeleton = () => {
  return (
    <>
      <Skeleton width="100%" height={34} radius={4} />
    </>
  );
};

export const SiadebarSkeleton = () => {
  return (
    <>
      <Skeleton width="100%" height={842} radius={4} />
    </>
  );
};