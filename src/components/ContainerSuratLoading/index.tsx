

const ContainerSuratLoading = () => {
  return (<div className="rounded-lg shadow-md p-4 space-y-4 h-screen  animate-pulse">
    <div className='flex flex-col h-full p-4 gap-4'>

      <div className="bg-gray-500 rounded flex-shrink-0 w-full p-4 gap-4 flex flex-col">
        <div className="bg-gray-600 h-4 w-[20vw] rounded-full" />
        <div className="bg-gray-600 h-4 w-[15vw] rounded-full" />
        <div className="gap-2 flex flex-col">
          <div className="bg-gray-600 h-3 w-full rounded-full" />
          <div className="bg-gray-600 h-3 w-full rounded-full" />
          <div className="bg-gray-600 h-3 w-full rounded-full" />
          <div className="bg-gray-600 h-3 w-full rounded-full" />
          <div className="bg-gray-600 h-3 w-full rounded-full" />
          <div className="bg-gray-600 h-3 w-full rounded-full" />
          <div className="bg-gray-600 h-3 w-1/2 rounded-full" />
        </div>
        <div className="bg-gray-600 h-3 w-[15vw] rounded-full" />
      </div>

      <div className="h-6 bg-gray-500 rounded w-full  flex-1 p-4 flex flex-col gap-6 overflow-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <div key={i} className="flex gap-4">
          <div className="h-[40px] w-[40px] bg-gray-600 rounded-full" />
          <div className="flex flex-col gap-2">
            <div className="h-[10px] w-1/2 bg-gray-600 rounded-full" />
            <div className="h-[10px] w-[calc(100vw-160px)] bg-gray-600 rounded-full" />
            <div className="h-[10px] w-[50vw] bg-gray-600 rounded-full" />
          </div>
        </div>)}
      </div>
    </div>
  </div>)
}

export default ContainerSuratLoading