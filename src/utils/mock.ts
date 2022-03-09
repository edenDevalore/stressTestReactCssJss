import MOCK_DATA_0 from "./MOCK_DATA_0";
import MOCK_DATA_1 from "./MOCK_DATA_1";
import MOCK_DATA_2 from "./MOCK_DATA_2";
import MOCK_DATA_3 from "./MOCK_DATA_3";

export interface IProfileProps {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  phone_number: string;
  image: string;
  index?: number;
  startTime?: number;
  length?: number;
  calculateTime?: any;
}

const arrOfdata = [...MOCK_DATA_0, ...MOCK_DATA_1, MOCK_DATA_2, ...MOCK_DATA_3];

const objectData = {
  id: 1000,
  first_name: "Basia",
  last_name: "Donner",
  email: "bdonnerrr@squarespace.com",
  gender: "Female",
  phone_number: "372-604-6086",
  image:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ+SURBVDjLpZNdSJNRGMeFoC50flVXBV1EoF3YdzKYG0u30FTsY9bQnLpqrSg/5uZe29RtimvkxBbCTJupmzpLl8tNxfwObUxTF2RQRNJFGOqFYELx/nt7LwaCzKKLH5zz8Px/POccThCAoP9hy+LNq+nVJZzdULMZULBCIGVGQpye2vhXAqlYVK5OiYIhMQx6Cg0vFDJ2CLLj9kGcJTRuKyAuxKKGCiqokIwmFPmcCOScDkPa0T3ktgJZbDjZa1Liq9uAcZMEGaciIGLuhZC5H4Lj4TDKrgQHFJgzD6yuvn+F5Tct+PbagumnRfjk0OC7z43W6wfX5ptu7QwouC9ielY8Nix5O7E+20bRTq9Xpttgzj3iDXgEvuJZMPt23Wht4UVseBvw4103zfpbK+qJ82BdezDCL7AythSw8+yRPIW1kaN+gaahBRRo69BaKEBvVjxERDNV+4Az5S/Bl7c/ji+whW8SMItcO/LrxyxcdQ/d9GT4I5INQxh0TWBKkoUUjRN6hw/C2jGwS7pJbp7FyJXZd/kFScVWXcbDcTg8i0jQusDTuSHQ92E2Iwnz2WlIrhoAt8yJVMMw1B2zuFw9RPLzGqr8ghlV1K8lpxKEbQa6rnm6Sah3w5aaAlVuMc5VuJBpmoDAOApJ/SSW+0oxWRS94RfMqaPJlQEtBDWjeNS/ACUlkrd4kW8aQEJZD+5aPJA2TKGyy4fEij6sDurgKT5M+gW+5jvENHHo5yXjCOI1vajs9tGUdc7hbGU/PdWfPeeeAyxFB2ZKYzaojG7TK3xulzIk2saYkzfMi1zqouKILrCUz2mYcjtYcjt5LMe0JlaZT3zpkDIC/sZ/4TfeSKfmHj5WOQAAAABJRU5ErkJggg==",
};

export { arrOfdata, objectData };
