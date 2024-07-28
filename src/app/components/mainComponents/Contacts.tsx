import {FC} from 'react';
import Container from '../wrappers/Container';
import contacts from '../../../lib/data/contacts.json';
import OurContacts from '../ourContacts/ourContacts';
import ContactForm from '../forms/contactForm';

const Contacts: FC = () => {
  return (
    <section 
      id="contacts" 
      className="  flex items-center justify-center bg-cover bg-center bg-no-repeat bg-contacts-sm retina:bg-contacts-sm-2x
        md:bg-contacts-md  md:retina:bg-contacts-md-2x
        xl:bg-contacts-xl xl:h-[554px] xl:retina:bg-contacts-xl-2x        
      "
    >
      <Container >
        <div className="flex flex-col paddingY w-[280px] md:w-[704px] md:h-[563px] xl:w-[1232px] xl:h-[554px] bg-black bg-opacity-50">
          <h2 className='title mb-9 md:mb-[71px]'><span>{contacts.titleSpan}</span> {contacts.title}</h2>

          <div className='xl:flex xl:gap-[231px]'>
            <OurContacts />


            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
