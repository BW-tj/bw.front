import ContentLoader from 'react-content-loader';
import React from 'react';

const Skeleton = ({
  height = 11,
  width = 200,
  radius = 3,
  uniqueKey
}) => (
  <ContentLoader
    speed={0.5}
    width={width}
    height={height}
    backgroundColor="#DCDCDC"
    foregroundColor="#F6F6F6"
    uniqueKey={uniqueKey}
  >
    <rect x="0" y="0" rx={radius} ry={radius} width={width} height={height} />
  </ContentLoader>
);

export const ProductsSkeleton = () => {
  return (
    <React.Fragment>
      <Skeleton width="100%" height={406} radius={4} uniqueKey="product-1" />
      <Skeleton width="100%" height={406} radius={4} uniqueKey="product-2" />
      <Skeleton width="100%" height={406} radius={4} uniqueKey="product-3" />
      <Skeleton width="100%" height={406} radius={4} uniqueKey="product-4" />
      <Skeleton width="100%" height={406} radius={4} uniqueKey="product-5" />
      <Skeleton width="100%" height={406} radius={4} uniqueKey="product-6" />
      <Skeleton width="100%" height={406} radius={4} uniqueKey="product-7" />
      <Skeleton width="100%" height={406} radius={4} uniqueKey="product-8" />
    </React.Fragment>
  );
};

export const BannerSkeleton = () => {
  return (
    <React.Fragment>
      <Skeleton width="100%" height={350} radius={4} uniqueKey="banner-1" />
      <Skeleton width="100%" height={350} radius={4} uniqueKey="banner-2" />
      <Skeleton width="100%" height={350} radius={4} uniqueKey="banner-3" />
    </React.Fragment>
  );
};

export const TitleSkeleton = () => {
  return (
    <React.Fragment>
      <Skeleton width="100%" height={34} radius={4} uniqueKey="title-1" />
    </React.Fragment>
  );
};

export const SidebarSkeleton = () => {
  return (
    <React.Fragment>
      <Skeleton width="100%" height={842} radius={4} uniqueKey="sidebar" />
    </React.Fragment>
  );
};