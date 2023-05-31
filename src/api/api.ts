// api.ts

export type ApiResponse = {
    application_id: string;
    type: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    categories: {
      income: Category;
      insurance: Category;
      residence: Category;
      identity: Category;
      ssn: Category;
      misc: Category;
    };
    vehicle_info: VehicleInfo;
    branding: Branding;
  };
  
  type Category = {
    combinatorial_logic: string;
    documents: {
      [key: string]: {
        data: Document[];
        status: string;
      };
    };
    status: string;
  };
  
  type Document = {
    custom_label?: string;
    status: string;
  };
  
  type VehicleInfo = {
    model: string;
    make: string;
    year: number;
    image_url: string;
  };
  
  type Branding = {
    contact_us_link: string;
    name: string;
    address_coordinates: {
      lng: number;
      lat: number;
      address: string;
    };
    privacy_link: string;
    terms_of_service_link: string;
    phone: string;
  };
  