import { useEffect } from "react";

type SEOProps = {
  pageTitle: string;
};

const SEO = ({ pageTitle }: SEOProps) => {
  useEffect(() => {
    document.title = `${pageTitle} - Online Courses & Education React Template`;
  }, [pageTitle]);

  return null;
};

export default SEO;
