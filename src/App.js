import { useState } from 'react';

import './App.css';

import main from './assets/images/bg-card-front.png';
import back from './assets/images/bg-card-back.png';
import { FormGroup, Label, Input, Button, InputCvv, InputDate } from './components/Form';
import {
  LeftSideCardOne,
  AppMain,
  LeftSide,
  LeftSideCardSecond,
  LeftSideCardCVV,
  RigthSide,
  LeftSideCardOneNum,
  LeftSideCardOneName,
  LeftSideCardOneDate,
  Container,
} from './components/Main';
import { useForm } from 'react-hook-form';
import Success from './components/Success';

function App() {
  const [name, setName] = useState('JANE APPLESEED');
  const [num, setNum] = useState('0000 0000 0000 0000');
  const [cvv, setCvv] = useState('123');
  const [MM, setMM] = useState('00');
  const [YY, setYY] = useState('00');
  const [value, setValue] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    setValue(!value);
    reset();
  };

  const handleCardDisplay = () => {
    const rawText = [...num.split(' ').join('')];
    const creditCard = [];
    rawText.forEach((t, i) => {
      if (i % 4 === 0) creditCard.push(' ');
      creditCard.push(t);
    });
    return creditCard.join('');
  };

  return (
    <AppMain>
      <Container>
        <LeftSide>
          <LeftSideCardOne src={main} />
          <LeftSideCardOneNum>{handleCardDisplay(num)}</LeftSideCardOneNum>
          <LeftSideCardOneName>{name}</LeftSideCardOneName>
          <LeftSideCardOneDate>
            {MM}/{YY}
          </LeftSideCardOneDate>

          <LeftSideCardSecond src={back} />

          <LeftSideCardCVV>{cvv}</LeftSideCardCVV>
        </LeftSide>
        <RigthSide>
          {value === true ? (
            <Success value={value} setValue={setValue} />
          ) : (
            <FormGroup onSubmit={handleSubmit(onSubmit)}>
              <Label htmlFor="label">CardHolder Name</Label>
              <Input
                type="text"
                {...register('name', {
                  required: true,
                })}
                placeholder="e.g Jane Appleseed"
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <div style={{ color: 'red' }}>Can't be blank</div>}

              <Label htmlFor="label">Card Number</Label>
              <Input
                type="number"
                {...register('number', {
                  required: true,
                  maxLength: 16,
                  minLength: 16,
                })}
                placeholder="e.g 1234 5678 9123 0000"
                onChange={(e) => setNum(e.target.value)}
              />
              {errors.number && errors.number.type === 'valueAsNumber' && (
                <div style={{ color: 'red' }}>Only numbers</div>
              )}

              {errors.number && errors.number.type === 'required' && (
                <div style={{ color: 'red' }}>Can't be blank</div>
              )}
              {errors.number && errors.number.type === 'maxLength' && (
                <div style={{ color: 'red' }}>Max length exceeded</div>
              )}
              {errors.number && errors.number.type === 'minLength' && (
                <div style={{ color: 'red' }}>Min length exceeded</div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Label htmlFor="label">Exp.Date(MM/YY)</Label>
                <Label htmlFor="label">CVC</Label>
              </div>
              <div style={{ display: 'flex' }}>
                <InputDate
                  type="number"
                  {...register('mm', {
                    required: true,
                    maxLength: 2,
                    minLength: 2,
                    pattern: {
                      value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    },
                  })}
                  placeholder="MM"
                  onChange={(e) => setMM(e.target.value)}
                />
                {errors.mm && errors.mm.type === 'required' && (
                  <div style={{ color: 'red' }}>Can't be blank</div>
                )}
                {errors.mm && errors.mm.type === 'maxLength' && (
                  <div style={{ color: 'red' }}>Max length exceeded</div>
                )}
                {errors.mm && errors.mm.type === 'minLength' && (
                  <div style={{ color: 'red', display: 'block' }}>Min length exceeded</div>
                )}
                <InputDate
                  type="number"
                  {...register('yy', {
                    required: true,
                    maxLength: 2,
                    minLength: 2,
                    pattern: {
                      value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    },
                  })}
                  onChange={(e) => setYY(e.target.value)}
                  placeholder="YY"
                />
                {errors.yy && errors.yy.type === 'required' && (
                  <div style={{ color: 'red' }}>Can't be blank</div>
                )}
                {errors.yy && errors.yy.type === 'maxLength' && (
                  <div style={{ color: 'red' }}>Max length exceeded</div>
                )}
                {errors.yy && errors.yy.type === 'minLength' && (
                  <span style={{ color: 'red', display: 'block' }}>Min length exceeded</span>
                )}

                <InputCvv
                  {...register('cvv', {
                    required: true,
                    maxLength: 3,
                    minLength: 3,
                    validate: {
                      positiveNumber: (value) => parseFloat(value) > 0,
                    },
                  })}
                  placeholder="e.g 123"
                  onChange={(e) => setCvv(e.target.value)}
                />
                {errors.cvv && errors.cvv.type === 'positiveNumber' && <p>Only number</p>}
                {errors.cvv && errors.cvv.type === 'required' && (
                  <div style={{ color: 'red' }}>Can't be blank</div>
                )}
                {errors.cvv && errors.cvv.type === 'maxLength' && (
                  <div style={{ color: 'red' }}>Max length exceeded</div>
                )}
                {errors.cvv && errors.cvv.type === 'minLength' && (
                  <div style={{ color: 'red', display: 'block' }}>Min length exceeded</div>
                )}
              </div>
              <Button>Submit</Button>
            </FormGroup>
          )}
        </RigthSide>
      </Container>
    </AppMain>
  );
}

export default App;
