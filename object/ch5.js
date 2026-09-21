const ob={
    titre:'',
    auteur:'',
    anee:""
}
function Addinfo(tit,aut,an){
   ob.anee=an
   ob.auteur=aut
   ob.titre=tit
   console.log(ob)
}
Addinfo("psycological","inko",'1995')