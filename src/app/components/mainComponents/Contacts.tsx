import {FC} from 'react';

const Contacts: FC = () => {
  return (
    <section 
      id="contacts" 
      className="
        h-[856px] 
        bg-cover bg-center bg-no-repeat
        bg-contacts-sm
        md:bg-contacts-md md:h-[691px]
        xl:bg-contacts-xl xl:h-[762px]
        retina:bg-contacts-sm-2x
        md:retina:bg-contacts-md-2x
        xl:retina:bg-contacts-xl-2x
      "
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        Contacts
      </div>
    </section>
  );
};

export default Contacts;
