// import Younglearners from '../../images/Younglearners.png';
// import Teens from '../../images/Teens.png';
// import Adults from '../../images/Adults.png';
// import Business from '../../images/Business.png';
// import Exams from '../../images/Exams.png';

const AgeGroupData =[
    {
        title: 'Young Learners',
        path: '/',
        icon: <i class="fas fa-child"></i>,
        className:'age-group-main-box col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6 my-2 ',
        classNamebox:'age-group-box pl-1 pt-2 YL-card',
        age: '4-6',
        book: 'Cambridge primary'
    },
    {
        title: 'School kids',
        path: '/',
        icon:<i class="fas fa-school"></i>,
        className:'age-group-main-box col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6 my-2 ',
        classNamebox:'age-group-box pl-1 pt-2 SK-card',
        age: '7-16',
        book: 'Oxford solutions'
        
    },
    {
        title: 'Adults',
        path: '/',
        icon:<i class="fas fa-female"></i>,
        className:'age-group-main-box col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6 my-2 ',
        classNamebox:'age-group-box pl-1 pt-2 A-card',
        age: '16+',
        book: 'Nat-Geo Life'
    },
    {
        title: 'Business English',
        path: '/',
        icon: <i class="fas fa-business-time"></i>,
        className:'age-group-main-box col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6 my-2 ',
        classNamebox:'age-group-box pl-1 pt-2 BE-card',
        age: '16+',
        book: 'Oxford Business English'
    },
    {
        title: 'Exams',
        path: '/',
        icon: <i class="fas fa-file-alt"></i>,
        className:'age-group-main-box col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6 my-2 ',
        classNamebox:'age-group-box pl-1 pt-2 EP-card',
        age: '16+',
        book: 'TOEFL, IELTS, State-exams'
    }
]




export default AgeGroupData;



