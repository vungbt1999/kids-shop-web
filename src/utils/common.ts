export const pagingDetect = ({
  limit = 10,
  page = 1
}: {
  limit?: number;
  page?: number;
}): { take: number; skip: number } => {
  const paging = {
    take: limit,
    skip: 1
  };
  const skip = limit * (page - 1);
  paging.skip = skip;
  return paging;
};
