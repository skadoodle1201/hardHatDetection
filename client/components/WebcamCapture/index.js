import { Button } from "@mui/material";
import styles from "~/styles/pages/upload-image.module.scss";

import Webcam from "react-webcam";
import { useCallback, useEffect, useRef, useState } from "react";

const videoConstraints = {
	width: 200,
	height: 200,
	facingMode: "user",
};

const WebcamCapture = (props) => {
	const { captureDoc, webcamToggler } = props;

	const [takePhotoBtnDisable, setTakePhotoBtnDisable] = useState(true);

	const webcamRef = useRef(null);

	// const capture = useCallback(() => {
	// 	const imageSrc = webcamRef.current.getScreenshot();
	// 	uploadCapturedDoc(imageSrc, captureDoc);
	// 	webcamToggler();
	// }, [webcamRef]);

	useEffect(() => {
		document.body.classList.add("lock-scroll");

		return () => {
			document.body.classList.remove("lock-scroll");
		};
	});

	return (
		<div className={styles.wcMain}>
			<div className={styles.wcMainWrapper}>
				<div className={styles.wcMainContent}>
					<Webcam
						audio={false}
						height="100%"
						ref={webcamRef}
						screenshotFormat="image/jpeg"
						width="100%"
						videoConstraints={videoConstraints}
						onUserMedia={() => {
							setTakePhotoBtnDisable(false);
						}}
					/>
				</div>

				<div className={styles.wcMainFooter}>
					<Button
						className="btn"
						variant="contained"
						// onClick={capture}
						disabled={takePhotoBtnDisable}
					>
						Take Photo
					</Button>

					<Button className="btn" variant="text" onClick={webcamToggler}>
						Cancel
					</Button>
				</div>
			</div>
		</div>
	);
};

export default WebcamCapture;
