import { ReactNode, useContext } from 'react';
import { languageContext } from '../logic/languageProvider';

export default function CardHeader({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  const { language } = useContext(languageContext);
  return (
    <div
      className="border-b-[0.75px] border-b-solid border-b-[#E4E5E7] py-3 mb-2.5 flex justify-between items-center"
      dir={language === 'english' ? 'ltr' : 'rtl'}
    >
      <h3 className="text-accent text-sm tracking-[-0.14px] font-medium">
        {title}
      </h3>
      <div className="flex gap-2 items-center">
        {children}
        <select
          name="timeRange"
          id="timeRange"
          dir={language === 'english' ? 'ltr' : 'rtl'}
          className=" text-xs text-secondary tracking-[0.02px] font-medium border-0 outline-0 focus:outline-0"
        >
          <option value="month">
            {language === 'english' ? 'Month' : 'شهر'}
          </option>
          <option value="year">
            {language === 'english' ? 'Year' : 'سنة'}
          </option>
        </select>
      </div>
    </div>
  );
}
