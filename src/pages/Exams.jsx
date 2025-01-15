import { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import { enUS } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const Exams = () => {
  const [exams, setExams] = useState([
    {
      id: 1,
      title: 'Mathematics Final',
      start: new Date(2024, 1, 15, 10, 0),
      end: new Date(2024, 1, 15, 12, 0),
      subject: 'Mathematics',
      room: 'Room 101',
    },
    // Add more example exams here
  ]);

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Calendario de exámenes</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Agregar examen
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="bg-white p-4 rounded-lg shadow h-[600px]">
            <Calendar
              localizer={localizer}
              events={exams}
              startAccessor="start"
              endAccessor="end"
              style={{ height: '100%' }}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Próximos exámenes</h2>
            {exams.map((exam) => (
              <div
                key={exam.id}
                className="border-b border-gray-200 last:border-0 py-3"
              >
                <h3 className="font-medium">{exam.title}</h3>
                <p className="text-sm text-gray-600">
                  {format(exam.start, 'PPP')} at {format(exam.start, 'p')}
                </p>
                <p className="text-sm text-gray-600">
                  Subject: {exam.subject} | Room: {exam.room}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Estadística</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Exámenes totales</span>
                <span className="font-medium">{exams.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Próximos exámenes</span>
                <span className="font-medium">
                  {exams.filter((exam) => exam.start > new Date()).length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exams;