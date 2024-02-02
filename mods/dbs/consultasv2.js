const db=require("./db")

class Q {
  static newhivepayment (req){
        let lt=req.body.LicenseType
        let lsize=req.body.Licsize
        let lClientName=req.body.lClientName
        let lBillingName=req.body.lBillingName

      let [year, month, day] = req.body.fechaini.split('-');
      let fini=month +"/"+day +"/"+year
      let [fyear, fmonth, fday] = req.body.fechafin.split('-');
      let ffin=fmonth +"/"+fday +"/"+fyear
      let city=req.body.city
      let zip=req.body.zip


      let sql=" INSERT IGNORE INTO `HOA_Client_Name_Info_Table` (`id`, `HOA_Client_ID_Number`, `License_Type_Number`," +
    " `License_Number`, `License_Status`, `HOA_Lic_Size`, `License_Version_Number`, `License_Origination_Date`, `Last_Paymt_Date`, " +
    "`Paymt_amount_required`, `Last_Paymt_Amount`, `Ref_Num`, `Paymt_Balance`, `Next_Paymt_Date`, `Subscription_Term_Date`, `Download_Link`," +
    " `Client_Corporate_Name`, `Client_Billing_Name`, `Client_Street_Number`, `Client_Street_Name`, `Client_City`, `Client_State`, `Client_Zip`, " +
    "`HOA_Tel_Number`, `HOA_WEB_Site`, `HOA_Mgr_In_Charge_Name`, `HOA_Mgr_In_Charge_Email`, `HOA_Mgr_In_Charge_Tel`, `updated`, `squareApiCode`, " +
    `\`SteemUser\`, \`PayFees\`) VALUES ('', '', '${lt}', '', '', '${lsize}', '', '${fini}', NULL, '', '', NULL, '', '${ffin}', '${ffin}', '', '${lClientName}', '${lBillingName}', 'any number', 'any street', '${city}', ` +
    "'', '${zip}', '', '', '', '', '', NULL, NULL, '', NULL)"

       let r=db.execute(sql);
       console.log("-- newhivepayment ")
       console.log(r)
        return r
    }
}



const chpass=async()=>{
    let v=await Q.newhivepayment()
    console.log(v)
}

console.log("--cargando consultasv2")

module.exports=Q