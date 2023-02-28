import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 1IcxRMDpbun2Bfv65jh8ekGcx88cbGoHrlw9WCKk1Iyhzm58gRU0xHuk5cVJvZB8asrvYwH_kRfiVczBNNAOL6YqWgkZTgfC4yBx4b-b-U51WyxsHwJ_Wp8Ex-P5Y3Yx",
  },
});
