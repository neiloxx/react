import React, { useState } from 'react';
import Form from '../components/Form/Form';
import './style.scss';
import Card from '../components/Card/Card';

const App: React.FC = () => {
  const [formValues, setFormValues] = useState<Array<any>>([]);

  return (
    <main className="main">
      <h1 className="main__title">react. forms</h1>
      <Form setFormValues={values => setFormValues([...formValues, values])} />
      <div className="main__cards-field">
        {formValues.map((value: any) => (
          <Card
            key={value}
            firstName={value.firstName}
            lastName={value.lastName}
            email={value.email}
            birthDate={value.birthDate}
            country={value.country}
          />
        ))}
      </div>
    </main>
  );
};

export default App;
