import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import { useParams } from 'react-router-dom';
import nmt_instructor_data from '../data/nmt-data/NMTInstructorData';
import NMTHeader from '../layouts/headers/NMTHeader';
import FooterOne from '../layouts/footers/FooterOne';
import BreadcrumbTwo from '../components/common/breadcrumb/BreadcrumbTwo';
import NMTTeacherDetails from '../components/nmt-landing/NMTTeacherDetails';

const NMTTeacherDetail = () => {
   const { teacherSlug } = useParams<{ teacherSlug: string }>();
   const teacher = nmt_instructor_data.find(t => t.slug === teacherSlug);

   return (
      <Wrapper>
         <SEO pageTitle={teacher ? `${teacher.name} - НМТ Підготовка` : 'Викладач - НМТ Підготовка'} />
         <NMTHeader />
         <main className="main-area fix">
            <BreadcrumbTwo
               title={teacher?.name || 'Викладач'}
               sub_title="Наші викладачі"
            />
            <NMTTeacherDetails />
         </main>
         <FooterOne style={false} style_2={false} />
      </Wrapper>
   );
};

export default NMTTeacherDetail;
