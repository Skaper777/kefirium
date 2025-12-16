export const useApi = () => {
  const config = useRuntimeConfig();

  const getProducts = async (params?: {
    limit?: number;
    offset?: number;
    category?: string;
    search?: string;
    sortBy?: string;
  }) => {
    try {
      const query = new URLSearchParams();

      if (params?.limit) query.append("limit", params.limit.toString());
      if (params?.offset) query.append("offset", params.offset.toString());
      if (params?.category) query.append("category", params.category);
      if (params?.search) query.append("search", params.search);
      if (params?.sortBy) query.append("sortBy", params.sortBy);

      const url = `/api/products${
        query.toString() ? `?${query.toString()}` : ""
      }`;

      return await $fetch(url);
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  };

  const getProduct = async (id: number) => {
    try {
      return await $fetch(`/api/products/${id}`);
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  };

  const getCategories = async () => {
    try {
      return await $fetch("/api/categories");
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  };

  return {
    getProducts,
    getProduct,
    getCategories,
  };
};
