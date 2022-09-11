import logo from './logo.svg';
import './App.css';
import Header from './header';
import Tour from './Tour';
import data from './data';
import React from "react"


export default function () {

let [tours , changetours] = React.useState( [])


React.useEffect(function(){
  changetours(function(){
    return data.map(function(val){
        return {...val , isshown : false}
    })
})

},[data])




function deletetour(id){
  console.log('yess')
  changetours(prestate=>{
    return prestate.filter(tour=>{
      return tour.id !== id
    })
  })
}

function showmore(id){
  changetours(function(prestate){
      return prestate.map(function(val){
          if(id == val.id){
            return {...val , isshown : !val.isshown}
          }else{
            return val
          }
      })
  })
}


let tourjsx = tours.map(tour=>{
  return <Tour 
            img={tour.img} 
            name={tour.name} 
            price={tour.price} 
            info={tour.info} 
            id={tour.id} 
            delete={deletetour} 
            isshown={tour.isshown} 
            showmore={showmore} 
            show={tour.show} 
            key={tour.id}
            />
})

function refresh(){
  changetours(function(){
    return data.map(function(val){
        return {...val , isshown : false}
    })
})
}


  return (
    <main>
      <Header tours={tours.length} refresh={refresh} />
      

      

      <div className="section">
        {tourjsx}

      </div>


    </main>

  )
}
