'use client';
import { useContext } from 'react';
import Card from '@/components/ui/card';
import CardHeader from '@/components/ui/cardHeader';
import ConversationTrendsChart from '@/components/ui/charts/conversationTrendsChart';
import TokenConsumptionChart from '@/components/ui/charts/tokenConsumptionChart';
import BehaviorAnalysisChart from '@/components/ui/charts/BehaviorAnalysisChart';
import { languageContext } from '@/components/logic/languageProvider';

export default function Home() {
  const { language } = useContext(languageContext);
  const monthlyData = [
    {
      name: 'JAN',
      customersValue: 70.19,
      leadsValue: 104,
      tokenConsumption: 200,
    },
    { name: 'FEB', customersValue: 90, leadsValue: 108, tokenConsumption: 350 },
    {
      name: 'MAR',
      customersValue: 70.19,
      leadsValue: 204,
      tokenConsumption: 140,
    },
    {
      name: 'APR',
      customersValue: 115,
      leadsValue: 104,
      tokenConsumption: 200,
    },
    {
      name: 'MAY',
      customersValue: 70.19,
      leadsValue: 134,
      tokenConsumption: 300,
    },
    { name: 'JUN', customersValue: 210, leadsValue: 164, tokenConsumption: 90 },
    {
      name: 'JUL',
      customersValue: 70.19,
      leadsValue: 104,
      tokenConsumption: 230,
    },
    {
      name: 'AUG',
      customersValue: 100,
      leadsValue: 123,
      tokenConsumption: 130,
    },
    {
      name: 'SEP',
      customersValue: 70.19,
      leadsValue: 302,
      tokenConsumption: 100,
    },
    {
      name: 'OCT',
      customersValue: 70.19,
      leadsValue: 104,
      tokenConsumption: 70,
    },
    {
      name: 'NOV',
      customersValue: 349,
      leadsValue: 240,
      tokenConsumption: 190,
    },
    {
      name: 'DEC',
      customersValue: 200,
      leadsValue: 104,
      tokenConsumption: 320,
    },
  ];

  const behaviorAnalysisData = [
    {
      name: language === 'english' ? 'Polite' : 'مهذب',
      behaviorAnalysis: 10,
      fill: '#56CC9D',
    },
    {
      name: language === 'english' ? 'Avg' : 'الاجمالي',
      behaviorAnalysis: 20,
      fill: '#1B59F8',
    },
    {
      name: language === 'english' ? 'Rude' : 'وقح',
      behaviorAnalysis: 70,
      fill: '#E84C4E',
    },
  ];

  return (
    <div
      className="pt-3 responsive-grid"
      dir={language === 'arabic' ? 'rtl' : 'ltr'}
    >
      <Card otherClasses="h-72">
        <CardHeader
          title={
            language === 'english' ? 'Conversation Trends' : 'اتجاهات المحادثة'
          }
        >
          <div
            className="flex flex-col text-xs"
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            <div className="flex gap-1 items-center">
              <div className="w-4 h-2 bg-[#1B59F8CC] rounded-2xl"></div>
              <div className="text-xs font-semibold text-secondary">
                {language === 'english' ? 'Customers' : 'العملاء'}
              </div>
            </div>

            <div className="flex gap-1 items-center">
              <div className="w-4 h-2 bg-[#56cc9d] rounded-2xl"></div>
              <div className="text-xs font-semibold text-secondary">
                {language === 'english' ? 'Leads' : 'القيادات'}
              </div>
            </div>
          </div>
        </CardHeader>
        <ConversationTrendsChart data={monthlyData} />
      </Card>

      <Card otherClasses="h-72">
        <CardHeader
          title={language === 'english' ? 'Behavior Analysis' : 'تحليل السلوك'}
        />
        <BehaviorAnalysisChart data={behaviorAnalysisData} />
      </Card>

      <Card otherClasses="h-72">
        <CardHeader
          title={
            language === 'english' ? 'Token Consumption' : 'استهلاك الرموز'
          }
        />
        <TokenConsumptionChart data={monthlyData} />
      </Card>
    </div>
  );
}
