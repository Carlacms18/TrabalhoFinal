

const Banner = () => (
    <div className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/Porton.jpg')"}}>
        <div className="flex items-center justify-center " style={{backdropFilter: "saturate(150%) blur(5px)", width: "100%",height:"100%"}}>
        <div className="text-center italic " >
        <h1 className="text-6xl font-extrabold text-white ">FEEL THE MINDEL BREEZE</h1>
      </div>
        </div>
     
    </div>
  );
  
  export default Banner;
  