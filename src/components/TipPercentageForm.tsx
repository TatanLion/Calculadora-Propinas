import React from "react"

type TipPercentageFormProps = {
    tip: number
    setTip: React.Dispatch<React.SetStateAction<number>>
}

export default function TipPercentageForm({ tip, setTip } : TipPercentageFormProps) {

    const tipOptions = [
        {
            id: 'tip-10',
            value: .10,
            label: '10%'
        },
        {
            id: 'tip-20',
            value: .20,
            label: '20%'
        },
        {
            id: 'tip-50',
            value: .50,
            label: '50%'
        },
    ]

    return (
        <div>
            <h3 className="font-black text-2xl">Propina: </h3>

            <form>
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="flex gap-2">
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>
                        <input 
                            id={tipOption.id}
                            type="radio" 
                            name="tip"
                            value={tipOption.value}
                            // Se coloca un + al inicia ya que target.value siempre devuelve un string y el + lo convierte a número para que el tipado no arrroje error
                            onChange={(e) => setTip(+e.target.value)}
                            checked={tipOption.value === tip}
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}
