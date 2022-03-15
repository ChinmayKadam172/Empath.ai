import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  entireText: {
    paddingTop: "20px",
    paddingBottom: "12px",
    paddingLeft: "12px",
    paddingRight: "12px",
  },
  restofthebs: {
    paddingTop: "10px",
    paddingBottom: "12px",
    paddingLeft: "15px",
    paddingRight: "12px",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontWeight: "300",
    fontSize: "20px",
    alignContent: "center",
  },
  bottom: {
    paddingBottom: "30px",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontWeight: "300",
    fontSize: "20px",
    alignContent: "center",
  }
}));

export default function Desktop() {
  const styles = useStyles();
  return (
    <>
    <iframe src="https://drive.google.com/file/d/1XJyAqao1RGrriNKYlYTCLnrQn6jjHLZm/preview" width="350px" height="480" allow="autoplay"></iframe>
      {" "}
      <div
        className={styles.entireText}
        style={{
          fontFamily: ["Montserrat", "sans-serif"].join(","),
          fontWeight: "600",
          fontSize: "30px",
          textAlign: "center",
          color: "#7EE8FA",
        }}
      >
        Unapproved Institutions
      </div>
      <div className={styles.restofthebs}>
        <p style = {{fontWeight: "600", textAlign: "center"}}>
          No institution shall offer Technical program or course without
          approval of the Council.
        </p>
        <p>
          Provided further that any Institution offering technical programme
          without approval the Council, shall be termed as unapproved if:-{" "}
        </p>
        <p>1. It is started without approval by the Council. </p>
        <p>
          2. It is working in temporary location / at location not approved by
          the Council.{" "}
        </p>
        <p>3. It is declared as "Unapproved" by the Council.</p>{" "}
        <p>
          {" "}
          The Council shall maintain a list of un-approved institutions based on
          the information received by the council and shall also inform the
          general public about the same from time to time.
        </p>
        <p>
          {" "}
          Provided further that any Technical Institution, which has already
          started without following AICTE approval procedure, wishes to submit
          an application/proposal, will be considered as new Technical
          Institution requiring the same procedure as given in Clause/s 4 to 13,
          for submission and processing of application / proposal. If the
          Council decides to issue Letter of Approval for such Institution,
          after processing the proposal as per laid down procedure, its legal
          date of starting will be from the date of issue of the Letter of
          Approval and the students admitted, if any, before receiving approval
          by the Council, will have to be readmitted as per laid down procedure
          considering basic eligibility for admission from the beginning of
          first year after approval by the Council. Students, who are admitted
          prior to approval by the Council, will not have any right for
          readmission and will have to fulfill all the requirements for
          admission.
        </p>{" "}
        <p>
          {" "}
          The Institutions conducting courses/programmes in technical education,
          in temporary location / at location not approved by the Council, shall
          be liable for action for closure including appropriate action against
          defaulting Societies/ Trusts/ Companies/ Associated Individuals as the
          case may be.
        </p>
        <p>
          {" "}
          However, if any such Technical Institution, wishes to submit an
          application/proposal for approval, it will be considered as new
          Technical Institution requiring the same procedure, as given in
          Clause/s 4 to 13, of approval process hand book for submission and
          processing of application/ proposal.{" "}
        </p>{" "}
        <p>
          If the Council decides to issue Letter of Approval for such
          Institution, after processing the proposal as per laid down procedure,
          its legal date of starting will be from the date of issue of the
          Letter of Approval and the students admitted, if any, before receiving
          approval by the Council, will have to be readmitted as per laid down
          procedure considering basic eligibility for admission from the
          beginning of the first year after approval by the Council. Students,
          who are admitted prior to approval by the Council, will not have any
          right for re-admission and will have to fulfill all the requirements
          for admission.{" "}
        </p>{" "}
        <p>
          No course other than those specifically approved by the Council, be
          run in the same premises sharing the same facilities.
        </p>
        <p>
          {" "}
          The Council shall initiate appropriate penal civil and / or criminal
          action against such defaulting Institutions/ Societies/ Trusts/
          Companies/ Associated Individuals as the case may be and the following
          action shall also be taken:-
        </p>{" "}
        <p>1. No admission status for approved programme/courses</p>
        <p> 2. Withdrawal of approval of the Institution</p>
        <p>
          {" "}
          However, such Institution may follow AICTE approval procedure by
          submitting an application / proposal, as mentioned in Clause/s 23, 25
          to 30 of the approval process hand book.
        </p>{" "}
        <p className={styles.bottom}>
          {" "}
          If the Council decides to issue Letter of Approval for such courses,
          after processing the proposal as per laid down procedure, its legal
          date of starting will be from the date of issue of the Letter of
          Approval and the students admitted, if any, before receiving approval
          by the Council, will have to be readmitted as per laid down procedure
          considering basic eligibility for admission from the beginning of
          first year after approval by the Council. Students, who are admitted
          prior to approval by the Council, will not have any right for
          re-admission and will have to fulfil all the requirements for
          admission.
        </p>
      </div>
    </>
  );
}
