import service from "./request.service";
const getAllService = {
  table: (current) => service.get(`/variations?page=${current}`),
};

export default getAllService;
