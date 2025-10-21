import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import { useParams } from 'react-router-dom';
import nmt_instructor_data from '../data/nmt-data/NMTInstructorData';
import NMTHeader from '../layouts/headers/NMTHeader';
import NMTFooter from '../layouts/footers/NMTFooter';
import NMTTeacherDetails from '../components/nmt-landing/NMTTeacherDetails';

const NMTTeacherDetail = () => {
   const { teacherSlug } = useParams<{ teacherSlug: string }>();
   const teacher = nmt_instructor_data.find(t => t.slug === teacherSlug);

   return (
      <Wrapper>
         <SEO pageTitle={teacher ? `${teacher.name} - НМТ Підготовка` : 'Викладач - НМТ Підготовка'} />
         <NMTHeader />
         <main className="main-area fix">
            <NMTTeacherDetails />
         </main>
         <NMTFooter />
      </Wrapper>
   );
};

export default NMTTeacherDetail;
