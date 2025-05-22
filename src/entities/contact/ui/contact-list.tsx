import { contactObj } from "../model/contact-info";

export const ContactList = () => {
  return (
    <>
      {contactObj.map(({ title, info, icon: Icon }, index) => (
        <dl className="flex flex-col gap-2 " key={index}>
          <div className="flex items-center gap-2 font-light flex-wrap">
            <dt className="flex items-center text-[19px]">
              {Icon && <Icon width={32} className="stroke-indigo-600" />}
              {title}:
            </dt>
            <dd className="text-black-opacity75 text-[19px]">{info}</dd>
          </div>
        </dl>
      ))}
    </>
  );
};
