const Radio = ({ checked }: { checked: boolean }) => {
  return (
    <>
      <button
        type="button"
        role="radio"
        aria-checked={checked ? 'true' : 'false'}
        data-state={checked ? 'checked' : 'unchecked'}
        className="group relative flex h-5 w-5 items-center justify-center outline-none"
      >
        <div className="shadow-[0_1px_2px_0_rgba(3,7,18,0.12),0_0_0_1px_rgba(3,7,18,0.08)] bg-white group-data-[state=checked]:bg-primary-600 flex h-[14px] w-[14px] items-center justify-center rounded-full transition-all">
          {checked && (
            <span
              data-state={checked ? 'checked' : 'unchecked'}
              className="group flex items-center justify-center"
            >
              <div className="bg-white shadow-[0_1px_2px_0_rgba(30,58,138,0.6)] rounded-full h-1.5 w-1.5"></div>
            </span>
          )}
        </div>
      </button>
    </>
  )
}

export default Radio
