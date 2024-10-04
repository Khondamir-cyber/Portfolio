import './MainInfo.css'

export default function MainInfo({ cl, img, title, work }) {
	return (
		<div className={cl}>
			<div className="absolute title">
				<div className="inner">{title}</div>
			</div>
			<div className="absolute work">
				<div className="inner">{work}</div>
			</div>
			<img src={img} />

		</div>
	);
}