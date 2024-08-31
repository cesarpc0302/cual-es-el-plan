'use client'

import { useFormStatus } from 'react-dom'
import { useFormState } from 'react-dom'
import { POST } from '../api/events/route'

const initialState = {
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
}

function SubmitButton() {
  const {pending} = useFormStatus()

  return (
    <button type="submit" aria-disabled={pending}>
      Confirmar
    </button>
  )
}
export default function Form() {
  const [state, formAction] = useFormState(POST, initialState)

  return(
    <form action={formAction}>

        <label>Nombre del Evento</label>
        <input type='text' id='name' name='name' maxlength="80" required />

        <label>Fecha de inicio</label>
        <input type='datetime-local' id='finicio' name='finicio' min={Date.now()} required />
        
        <label>Fecha de finalizacion</label>
        <input type='datetime-local' id='ffinalizacion' name='ffinalizacion' min={Date.now()} />
        <label>Cover</label>
        <input type='number' id='cdesde' name='cdesde' min="0" max="9999999"  />
        <input type='number' id='chasta' name='chasta' min="0" max="9999999"  />
        <label>Descripcion</label>
        <textarea id='name' name='name' rows="10" cols="50" />
        <label for="ubicacion">Ubicacion</label>
        <select id="ubicacion" name="ubicacion">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <label for="tipo">Tipo de evento</label>
        <select id="tipo" name="tipo">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <label>Link al Evento</label>
        <input type="url" id="link" name="link" required />
        <label>Pet Friendly</label>
        <input type="checkbox" id='pet' name='pet' />
        <input type="reset" value="Reset" />
        <SubmitButton />
        <p aria-live='polite' role='status'>{state?.name}</p>
    </form>
  )
}