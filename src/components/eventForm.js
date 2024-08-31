'use client';
import React, { useState, forwardRef, useRef } from 'react';
import {
  Form,
  Button,
  TagPicker,
  DatePicker,
  DateRangePicker,
  Toggle,
  SelectPicker,
  Uploader,
  ButtonToolbar,
  Input,
} from 'rsuite';
import {
  SchemaModel,
  StringType,
  DateType,
  NumberType,
  ArrayType,
  BooleanType,
} from 'schema-typed';
import locations from '../data/locations';
import types from '../data/types';
//import axios from 'axios';

// eslint-disable-next-line react/display-name
const Textarea = forwardRef((props, ref) => (
    <Input {...props} as="textarea" ref={ref} />
  ));

function EventForm() {
  const [direccion, setDireccion] = useState('');
  const [coverDesde, setCoverDesde] = useState(0);
  //    const [coverHasta, setCoverHasta] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  //    const [endDate, setEndDate] = useState(new Date());
  const [formValue, setFormValue] = useState({
    name: '',
    startDate: undefined,
    endDate: undefined,
    coverDesde: 0,
    coverHasta: 0,
    textarea: '',
    location: '',
    type: [],
    links: '',
    petFriendly: false,
  });

  const formRef = useRef();

  const model = SchemaModel({
    name: StringType().isRequired('Debe agregar un nombre al evento'),
    startDate: DateType()
      .min(new Date(), 'La fecha de inicio debe ser una fecha futura')
      .isRequired('Debe agregar una fecha de inicio del evento'),
    endDate: DateType().min(
      startDate,
      'La fecha de finalizacion debe ser mayor a la fecha de inicio'
    ),
    coverDesde: NumberType('Campo debe contener un numero')
      .min(0, 'El monto no puede ser un valor negativo')
      .isInteger('Debe ser un numero entero'),
    coverHasta: NumberType('Campo debe contener un numero')
      .min(coverDesde, 'El monto maximo debe ser mayor al monto minimo')
      .isInteger('Debe ser un numero entero'),
    textarea: StringType(),
    location: StringType().isRequired('Debe agregar una ubicacion al evento'),
    type: ArrayType().isRequired('Debe agregar al menos una categoria al evento'),
    links: StringType()
      .isURL('El link al evento debe ser valido')
      .isRequired('Debe agregar un link al evento'),
    petFriendly: BooleanType(),
  });

  let selectLocation = locations
    .map((item) => ({
      label: item.name,
      value: item.name,
    }))
    .sort(sortTags);

  let selectType = types
    .map((item) => ({
      label: item.name,
      value: item.name,
    }))
    .sort(sortTags);

  const { beforeToday } = DateRangePicker;

  const finalEvent = {
    name: formValue.name,
    date: {
      start: formValue.startDate,
      end: formValue.endDate ? formValue.endDate : formValue.startDate,
    },
    cover: [
      formValue.coverDesde ? formValue.coverDesde : 0,
      formValue.coverHasta ? formValue.coverHasta : formValue.coverDesde || 0,
    ],
    description: formValue.textarea,
    location: formValue.location,
    type: formValue.type,
    links: formValue.links,
    creationDate: new Date(),
    userID: 'admin',
    petFriendly: formValue.petFriendly,
    featured: false,
  };

  // function getStartDate(dateValue) {
  //     setStartDate(dateValue);
  // }

  // function getEndDate(dateValue) {
  //     setEndDate(dateValue);
  // }

  function updateAdress(text) {
    let location = locations.find((locc) => locc.name === text);
    setDireccion(location?.address);
  }

  function sortTags(a, b) {
    let x = a.value.toLowerCase();
    let y = b.value.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  }

  const fetchEvents = async () => {
    const res = await fetch('/api/events');
    const events = await res.json();
    return events;
  };

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then((data) => setEvents(data));
  }, []);

  const handleSubmit = (event) => {
    if (!formRef.current.check()) {
      console.log('error');
      return;
    }

    // axios
    //   .post('http://localhost:5000/events', finalEvent)
    //   .then((res) => console.log('Event added'))
    //   .catch((err) => console.log(err));

    alert('Gracias por agregar su evento.\nMuy pronto sera incluido en nuestra seleccion');
  };

  return (
    <Form
      fluid
      ref={formRef}
      model={model}
      onChange={setFormValue}
      formValue={formValue}
      onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.ControlLabel>Nombre del Evento</Form.ControlLabel>
        <Form.Control
          name="name"
          type="text"
          maxLength={80}
        />
        <Form.HelpText>Maximo 80 caracteres</Form.HelpText>
      </Form.Group>
      <Form.Group
        controlId="startDate"
        className="coverEventForm">
        <Form.ControlLabel>Fecha de inicio</Form.ControlLabel>
        <Form.Control
          name="startDate"
          accepter={DatePicker}
          onChange={setStartDate}
          format="dd/MM/yyyy hh:mm aa"
          showMeridian
          shouldDisableDate={beforeToday()}
          size="md"
        />
        <Form.HelpText>Seleccione fecha y hora de inicio</Form.HelpText>
      </Form.Group>
      <Form.Group
        controlId="endDate"
        className="coverEventForm">
        <Form.ControlLabel>Fecha de finalizacion</Form.ControlLabel>
        <Form.Control
          name="endDate"
          accepter={DatePicker}
          format="dd/MM/yyyy hh:mm aa"
          showMeridian
          shouldDisableDate={beforeToday()}
          size="md"
        />
        <Form.HelpText>Seleccione fecha y hora de finalizacion</Form.HelpText>
      </Form.Group>
      <Form.Group
        controlId="coverDesde"
        layout="inline"
        className="coverEventForm">
        <Form.ControlLabel>Cover</Form.ControlLabel>
        <Form.ControlLabel>Desde:</Form.ControlLabel>
        <Form.Control
          name="coverDesde"
          type="number"
          onChange={setCoverDesde}
        />
      </Form.Group>
      <Form.Group
        controlId="coverHasta"
        layout="inline"
        className="coverEventForm">
        <Form.ControlLabel></Form.ControlLabel>
        <Form.ControlLabel>Hasta:</Form.ControlLabel>
        <Form.Control
          name="coverHasta"
          type="number"
        />
      </Form.Group>
      <Form.Group controlId="textarea">
        <Form.ControlLabel>Descripcion</Form.ControlLabel>
        <Form.Control
          rows={6}
          name="textarea"
          accepter={Textarea}
        />
      </Form.Group>
      <Form.Group controlId="location">
        <Form.ControlLabel>Ubicacion</Form.ControlLabel>
        <Form.Control
          name="location"
          data={selectLocation}
          accepter={SelectPicker}
          onChange={updateAdress}
        />
        <Form.HelpText>{direccion}</Form.HelpText>
      </Form.Group>
      <Form.Group controlId="type">
        <Form.ControlLabel>Tipo de evento</Form.ControlLabel>
        <Form.Control
          name="type"
          accepter={TagPicker}
          data={selectType}
        />
        <Form.HelpText>
          Seleccione tipo principal de primero, luego puede agregar mas etiquetas
        </Form.HelpText>
      </Form.Group>
      <Form.Group controlId="links">
        <Form.ControlLabel>Link al Evento</Form.ControlLabel>
        <Form.Control
          name="links"
          type="text"
        />
        <Form.HelpText>
          Link a una pagina web o publicacion de red social para confirmar el evento
        </Form.HelpText>
      </Form.Group>
      <Form.Group controlId="petFriendly">
        <Form.ControlLabel>Pet Friendly:</Form.ControlLabel>
        <Form.Control
          accepter={Toggle}
          name="petFriendly"
          label="Toggle"
        />
      </Form.Group>
      <Form.Group controlId="uploader">
        <Form.ControlLabel>Imagen:</Form.ControlLabel>
        <Form.Control
          name="uploader"
          accepter={Uploader}
          action="#"
        />
        <Form.HelpText>Dimensiones sugeridas 200x300 px - Maximo 350 KB</Form.HelpText>
      </Form.Group>
      <ButtonToolbar>
        <Button
          type="submit"
          appearance="primary">
          Confirmar
        </Button>
        <Button appearance="subtle">Limpiar</Button>
      </ButtonToolbar>
    </Form>
  );
}

export default EventForm;
