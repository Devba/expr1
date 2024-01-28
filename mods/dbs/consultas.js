const db=require("./db")

class Post {

    static  checklogin(acc){
        

        let sql="SELECT * FROM ResidentsPayable where trim(ResidentID)=trim('" +acc+"')";

        return db.execute(sql)
    }
    static  checkKYlogin(acc){
        

        let sql="SELECT * FROM ResidentsPayable where trim(KCuser)=trim('" +acc+"')";

        return db.execute(sql)
    }


    static  findById(id){
        //let sql="SELECT * FROM MasterTransactionTable where PropertyReferenceID=$(id) ";
        //let sql="SELECT * FROM MasterTransactionTable where PropertyReferenceID=20004 ";
        let sql="SELECT * FROM MasterTransactionTable where trim(PropertyReferenceID)=trim('" +id+"')";

        return db.execute(sql)
    }

    static  tablaHoaClient(id){

        let sql="select * from HOA_Client_Name_Info_Table where License_Number='" +id+"'";

        return db.execute(sql)
    }
    static  tablaMgtClient(id){

        let sql="select * from `Mgt_Co_HOA_ Client_Info_Table` where License_Number='" +id+"'";

        return db.execute(sql)
    }

    static  cloudar(id){

        let sql="select * from `Mgt_Co_HOA_ Client_Info_Table` where License_Number='" +id+"'";

        return db.execute(sql)

        //let sql = "update  MasterTransactionTable set message='Proc' ,WebPaymentCode='"+pago.PaymtRefID +"' where TransactionID='" + pago.Transaction + "'";
        return db.execute(sql);

    }

    static  deletepayments(pago) {
        let voided="";
        if (pago.VoidTransaction && pago.VoidTransaction!="NA") {
            let m = new Date();
            let voided = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes() + ":" + m.getUTCSeconds()
            let sql = "update  MasterTransactionTable set message='Proc' ,WebPaymentCode='"+pago.PaymtRefID +"' ,voided='"+voided+"' where TransactionID='" + pago.PaymtRefID + "'";
            return db.execute(sql);
        }else {
            //let sql = "update  MasterTransactionTable set ProcessedonExcel='True',message='Proc' ,WebPaymentCode='"+pago.PaymtRefID +"' where TransactionID='" + pago.Transaction + "'";
            let sql = "update  MasterTransactionTable set ProcessedonExcel='True',message='Proc' ,WebPaymentCode='"+pago.PaymtRefID +"' where TransactionID='" + pago.PaymtRefID + "'";

            return db.execute(sql);
        }


    }


    static findAll (){
        let sql="select * from AuthFeebyLicense";
        let r=db.execute(sql);
        return r
    }

    static newhivepayment (){
    //sql="INSERT INTO `MasterTransactionTable` (`fdate`, `TransactionID`, `Amt`, `TransactionFeeAmount`,  `TotalAmt`, `PaymentType`, `PaymentTypeDetail`, `PropertyReferenceID`, `ResidentReferenceID`, `SecondaryResidentID`, `ResidentName`, `Status`, `ExternalInvoiceID`, `ReturnCode`, `PaymentReferenceID`, `RefundTransactionID`, `RefundAmount`, `RefundDate`, `RefundStatus`, `Code`, `Message`,`squarefee`) VALUES "
   // sql=sql +"('%s', '%s', '%s', '%s', '%s','%s', '%s', '%s', '%s', NULL, NULL, 'status', 'external invoice', 'Return Code', NULL, NULL, NULL, NULL, NULL, NULL, NULL,'%s')"%\
    //    (vtime,vtid,round(float(session["baseamount"]),2),round(float(fee)/100),session["total"],"ccAuth","Auth Paym",session["res"][0][0],session["res"][0][1],squarefee)
    
      //  let r=db.execute(sql);
      //  return r
    }
}


module.exports=Post