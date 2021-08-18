import React, { useState, useEffect } from "react";
import key from 'weak-key'

import {
  TabsStepGroup,
  BorderCard,
  Checkbox,
  FileTag,
  InfoBlock,
  InfoCard,
  Input,
  PhotoCard,
  Progress,
  RadioButton,
  Select,
  Step,
  Vote,
} from "./index";

// import "./TestComponent.scss";

const { TabStep, withHandlers } = TabsStepGroup;
const { Phase } = Step;
const { RadioGroup } = RadioButton;
const { CheckboxContainer, CheckboxGroup } = Checkbox;
const { PhotoGroup } = PhotoCard;
const { Option } = Select;
const { FileTagGroup, DescriptionTag } = FileTag;

const { InputGroup, InputDate, AutoSizeInput, InputList } = Input;

const style = {
  height: 1000,
  width: 800,
};

const Component1 = ({ handlers, updateHandlers }) => {
  const { onSave, onBack, onNext } = handlers;

  useEffect(() => {
    // console.log(handlers);
    // updateHandlers({
    //   ...handlers,
    //   // disableNext: true,
    // });
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          updateHandlers({
            ...handlers,
            disableSave: false,
          });
        }}
      >
        save
      </button>
      <button onClick={onBack}>back</button>
      <button
        onClick={() => {
          updateHandlers({
            ...handlers,
            disableNext: false,
          });
        }}
      >
        next
      </button>
      <div style={style}>
        some text some text some text some textsome textsome textsome textsome textsome text v some
        text some text some text some textsome textsome textsome textsome textsome text v some text
        some text some text some textsome textsome textsome textsome textsome text v some text some
        text some text some textsome textsome textsome textsome textsome text v some text some text
        some text some textsome textsome textsome textsome textsome text v some text some text some
        text some textsome textsome textsome textsome textsome text v some text some text some text
        some textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v
      </div>
    </div>
  );
};

const tabs = [
  {
    component: Component1,
    tab: "Персональные данные",
    key: "1",
  },
  {
    component: Component1,
    tab: "Профиль эксперта",
    key: "2",
  },
  {
    component: Component1,
    tab: "Связанные организации",
    key: "3",
  },
];

const stepsMap = [
  {
    id: "step1",
    color: "#238495",
    size: "big",
    title: "Этап №1 Подача заявки",
  },
  {
    id: "step2",
    color: "#0E7ABF",
    size: "big",
    title: "Этап №2 Анализ заявки",
  },
  {
    id: "step3",
    color: "#0E7ABF",
    size: "small",
    title: "Этап №3 Заключение договора",
  },
  {
    id: "step4",
    color: "#0E7ABF",
    size: "small",
    title: "Этап №4 Экспертная группа",
  },
  {
    id: "step5",
    color: "#0E7ABF",
    size: "small",
    title: "Этап №5 Программа проверки",
  },
  {
    id: "step6",
    color: "#0E7ABF",
    size: "big",
    title: "Этап №6 Выездная проверка",
  },
  {
    id: "step7",
    color: "#0E7ABF",
    size: "small",
    title: "Этап №7 Оценка экспертов",
  },
  {
    id: "step8",
    color: "#0E7ABF",
    size: "small",
    title: "Этап №8 Оценка экспертами",
  },
  {
    id: "step9",
    color: "#0E7ABF",
    size: "big",
    title: "Этап №9 Отбор образцов",
  },
  {
    id: "step10",
    color: "#A2A0A1",
    size: "big",
    title: "Этап №10 Регистрация образцов",
  },
  {
    id: "step11",
    color: "#A2A0A1",
    size: "small",
    title: "Этап №11 Программа испытаний",
  },
  {
    id: "step12",
    color: "#A2A0A1",
    size: "big",
    title: "Этап №12 Испытания продукции",
  },
  {
    id: "step13",
    color: "#0E7ABF",
    size: "big",
    title: "Этап №13 Назначение ответственного лица",
  },
  {
    id: "step14",
    color: "#0E7ABF",
    size: "small",
    title: "Этап №14 Оценка соответствия",
  },
  {
    id: "step15",
    color: "#0E7ABF",
    size: "big",
    title: "Этап №15 Решение по сертификации",
  },
  {
    id: "step16",
    color: "#0E7ABF",
    size: "big",
    title: "Этап №16 Выдача сертификата",
  },
];

const radioButons = [
  { value: "val1", text: "someText1" },
  { value: "val2", text: "someText2" },
  { value: "val5", text: "someText2" },
  { value: "val6", text: "someText2" },
  { value: "val3", text: "someText2" },
  { value: "val4", text: "someText2" },
];

const checkboxButtons = [
  {
    title: "Выбрать все органы по сертификации",
    value: "1",
    container: null,
  },
  {
    title: "Орган по сертификации продукции, работ (услуг) НОУ СЦ «ВНИИГАЗ-Сертификат»",
    value: "2",
    container: {
      organization:
        "Некоммерческая организация учреждение «Сертификационный центр «ВНИИГАЗ-Сертификат»",
      registration: "Зарегистрирован в системе ИГС2.0 с 10.10.2020",
    },
  },
  {
    title: "Орган по сертификации продукции, работ (услуг) ООО НПП «ИНИЦИАТИВА»",
    value: "3",
    container: {
      organization: "Общество с ограниченной ответственностью НПП «ИНИЦИАТИВА» ",
      registration: "",
    },
  },
];

export const TestComponent = () => {
  const [steps, setSteps] = useState({
    cur: 0,
    stepsCompleted: [],
  });
  const [state, setState] = useState({
    login: "",
    password: "",
    autosize: "",
    list: ["test"],
  });

  const handleOnChange = ({ target }) => {
    console.log(state);
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  const handleOnClick = ({ target }) => {
    window.target = target;
  };

  const handleOnChangeVote = (data) => {
    // console.log(`[${target.name}]: ${target.value}`);
    console.log(data);
  };

  const handleOnClickNext = () => {
    setSteps({
      cur: steps.cur + 1,
      stepsCompleted: [...steps.stepsCompleted].concat(steps.cur + 1),
    });
  };
 
  return (
    <div className="test-component">
      <div className="info-part">
        {false && (
          <TabsStepGroup
            render={(handlers, updateHandlers) =>
              tabs.map((el, i) => {
                const Component = withHandlers({ handlers, updateHandlers })(el.component);
                return (
                  <TabStep key={el.key} index={i} tab={el.tab}>
                    <Component />
                  </TabStep>
                );
              })
            }
          />
        )}
        {false && (
          <Select
            title="Выбор схемы сертификации"
            name="select"
            onChange={(data) => {
              console.log("change", data);
            }}
            onSelect={(data) => {
              console.log("select", data);
            }}
          >
            <Option title="hello1" value="val1" disabled />
            <Option title="hello2" value="val2" />
            <Option title="hello3" value="val2" />
            <Option title="hello4" value="val1" disabled />
            <Option title="hello5" value="val2" />
            <Option title="hello6" value="val1" disabled />
            <Option title="hello7" value="val2" />
            <Option title="hello8" value="val1" disabled />
          </Select>
        )}
        {false && (
          <InputList
            state={state.list}
            onChange={handleOnChange}
            name="list"
            title="Наименование нормативных документов (СТО Газпром, ГОСТ и др.)"
          />
        )}
        {false && (
          <>
            <Progress steps={stepsMap} stepsCompleted={steps.stepsCompleted} curStep={steps.cur} />
            <button onClick={handleOnClickNext}>Далее</button>
          </>
        )}
        {true && (
          <FileTagGroup title="Проект документа">
            <FileTag type="generate" title={"title"} subtitle={"subtitle"}>
              hello my dear
            </FileTag>
            <FileTag
              type="upload"
              typeFile="pdf"
              title={"title"}
              onClick={(data) => {
                console.log(data);
              }}
              subtitle={"subtitle"}
            />

            <FileTag
              type="upload"
              typeFile="img"
              title={"title"}
              onClick={(data) => {
                console.log(data);
              }}
              subtitle={"subtitle"}
            />
            <FileTag
              type="upload"
              typeFile="pdf"
              typeId="1"
              title={"title"}
              onClick={(data) => {
                console.log(data);
              }}
              subtitle={"subtitle"}
            />
            <DescriptionTag prepared="Тощев Тощев Тощев Тощев" date="01.01.2021">
              <FileTag
                type="open"
                typeFile="img"
                title={"title"}
                src="https://via.placeholder.com/350x150"
                subtitle={"subtitle"}
              />
            </DescriptionTag>
            <DescriptionTag>
              <FileTag
                type="open"
                typeFile="pdf"
                title={"title"}
                src="https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf"
                subtitle={"subtitle"}
              />
            </DescriptionTag>
          </FileTagGroup>
        )}
        {false && (
          <PhotoGroup title="Фотоотчет выездной проверки">
            <PhotoCard
              imgUrl="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              perfomer="perfomer"
              date="date"
              geoPos="geoPos"
              comments="comments"
              isValid
            />
            <PhotoCard
              imgUrl="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              perfomer="perfomer"
              date="date"
              geoPos="geoPos"
              comments="comments"
            />
          </PhotoGroup>
        )}

        {false && (
          <Step
            title="Этап №13 Оценка соответствия"
            date="10.10.2020"
            step={2}
            tags={Array(5).fill(<div className="test-tag"></div>)}
          >
            <Phase
              index={1}
              title="Подготовить решение о выдаче или отказе в выдаче сертификата соответствия"
              handler={() => {}}
              showHandler={true}
              term="term"
              participant="participant"
              perfomer="perfomer"
              status="status"
            />

            <Phase
              index={2}
              title="Провести анализ всей информации и результатов сертификации"
              handler={() => {}}
              showHandler={false}
              term="term"
              participant="participant"
              perfomer="perfomer"
              status="status"
            />
            <Phase
              index={3}
              title="Провести анализ всей информации и результатов сертификации"
              handler={() => {}}
              showHandler={true}
              term="term"
              participant="participant"
              perfomer="perfomer"
              status="status"
            />
          </Step>
        )}
        {false && (
          <InfoCard title="Сертификация продукции №009876 от 10.10.2020">
            {Array(5).fill(
              <InfoBlock
                label={"Центральный орган систем"}
                value={
                  "Кольца опорно-направляющие тип I (с опорами скольжения), тип II (с опорами качения), тип III (скомбиниров анными sadsads ad s"
                }
              />,
            )}
          </InfoCard>
        )}
        {false && (
          <BorderCard
            title="Сертификация продукции №009876 от 10.10.2020"
            tags={Array.from(Array(5).keys(), (el) => <div key={key({[el.toString()]: el})} className="test-tag"></div>)}
          >
            <InfoBlock
              label={"Центральный орган систем"}
              value={
                "Кольца опорно-направляющие тип I (с опорами скольжения), тип II (с опорами качения), тип III (с комбинированными опорами) asdsaa sda sdas das dsad ad sad asd для переходов магистральных"
              }
            />
            {
            Array.from(Array(5).keys(), (el) => <InfoBlock
            key={key({[el.toString()]: el})}
            label={"Центральный орган систем"}
            value={"Кольца опорно-направляющие тип"}
          />)
            }
          </BorderCard>
        )}
      </div>
      {false && (
        <div className="vote">
          <Vote
            className="parent"
            title="Согласование"
            onChange={handleOnChangeVote}
            params={[
              { text: "Согласовать состав экспертной группы" },
              { text: "Отказать в согласовании состава экспертной группы" },
            ]}
          />
        </div>
      )}

      {false && (
        <div>
          <InputGroup title="Общие сведения договора" className="parent">
            <AutoSizeInput
              title="Согласование"
              state={state.autosize}
              className="parent"
              onChange={handleOnChange}
              name="autosize"
            />
            <InputDate
              className="parent"
              name="date"
              modificators="some-modificators"
              state={state.date}
              onChange={handleOnChange}
              title="сроки"
            />
            <Input
              onChange={handleOnChange}
              className="parent"
              title="login"
              name="login"
              state={state.login}
            />
            <Input
              onChange={handleOnChange}
              state={state.password}
              className="parent"
              title="password"
              name="password"
              type="password"
            />
            <CheckboxGroup title="Выбор органов по сертификации" className="parent">
              <Checkbox
                className="parent"
                name="vote"
                onChange={handleOnChange}
                title={"Выбрать все органы по сертификации"}
                value={"test1"}
                disabled
              />
              {checkboxButtons.map((el) => {
                const Component = () => (
                  <Checkbox
                    key={el.value}
                    className="parent"
                    name="vote"
                    onChange={handleOnChange}
                    title={el.title}
                    value={el.value}
                    checked={state.vote === el.value}
                  />
                );
                return el.container ? (
                  <CheckboxContainer
                    key={el.value}
                    className="parent"
                    organization={el.container.organization}
                    registration={el.container.registration}
                  >
                    <Component />
                  </CheckboxContainer>
                ) : (
                  <Component />
                );
              })}
            </CheckboxGroup>
            <RadioGroup title="Центральный орган системы">
              {radioButons.map((el) => (
                <RadioButton
                  key={el.value}
                  className="parent"
                  name="contact"
                  onChange={handleOnChange}
                  text={el.text}
                  value={el.value}
                  noBorder
                />
              ))}
            </RadioGroup>
          </InputGroup>
        </div>
      )}
    </div>
  );
};
