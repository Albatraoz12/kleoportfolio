const Footer = () => {
  return (
    <footer className='flex flex-col mx-auto w-[90%] gap-10 mb-5 lg:max-w-[888px] md:text-center xl:max-w-[1169px] sticky top-[100vh]'>
      <div>
        <h3 className='mt-10 mb-5 text-[#3D56D9] text-xl md:text-2xl md:text-start text-cneter font-bold'>
          Get in touch at cleopapadopoulou@gmail.com
        </h3>
        <hr className='border-t-2 border-[#3D56D9] w-full' />
      </div>
      <p className='text-center text-sm text-[#686868] text-opacity-70'>
        Designed by Kleopatra Emmanouil, developed by Dimosthenis Emmanouil
        @2024{' '}
      </p>
    </footer>
  );
};

export default Footer;
