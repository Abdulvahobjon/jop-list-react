const data  = [
  { id:1 , about:{profession:"Photosnap" , new: 'New' , feature:"Featured"} , extra:[ "1d ago" , "Full Time" ,'USA only'] , heading: "Senior Frontend Developer" , techs:["Frontend" , "Senior" , "HTML", "CSS", "JavaScript"] ,  src: cardImg1} , 
  { id:2 , about:{profession:"Photosnap" , new: 'New' , feature:"Featured"} , extra:[ "1d ago" , "Full Time" ,'USA only'] , heading: "Senior Frontend Developer" , techs:["Frontend" , "Senior" , "HTML", "CSS", "JavaScript"] ,  src: cardImg2} , 
  { id:3 , about:{profession:"Photosnap" , new: 'New' , feature:"Featured"} , extra:[ "1d ago" , "Full Time" ,'USA only'] , heading: "Senior Frontend Developer" , techs:["Frontend" , "Senior" , "HTML", "CSS", "JavaScript"] ,  src: cardImg3} , 
  { id:4 , about:{profession:"Photosnap" , new: 'New' , feature:"Featured"} , extra:[ "1d ago" , "Full Time" ,'USA only'] , heading: "Senior Frontend Developer" , techs:["Frontend" , "Senior" , "HTML", "CSS", "JavaScript"] ,  src: cardImg4} , 
  { id:5 , about:{profession:"Photosnap" , new: 'New' , feature:"Featured"} , extra:[ "1d ago" , "Full Time" ,'USA only'] , heading: "Senior Frontend Developer" , techs:["Frontend" , "Senior" , "HTML", "CSS", "JavaScript"] ,  src: cardImg5} , 
  { id:6 , about:{profession:"Photosnap" , new: 'New' , feature:"Featured"} , extra:[ "1d ago" , "Full Time" ,'USA only'] , heading: "Senior Frontend Developer" , techs:["Frontend" , "Senior" , "HTML", "CSS", "JavaScript"] ,  src: cardImg6} 

]


 {data.map((item )=>{
                <Card key={item.id} id={item.id} about={item.about} heading={item.heading} techs={item.techs} extra={item.extra} src={item.src} />
             })}















