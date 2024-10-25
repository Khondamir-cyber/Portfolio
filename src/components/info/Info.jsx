import './Info.css'
import { TbGenderMale } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { IoSchoolOutline } from "react-icons/io5";
export default function Info() {
	return (
		<div className='info'>
			<div className="container">
				<div className="leftSide">
					<div className="img"><img src="https://Khondamir-cyber.github.io/portfolio/PHOTO.png" /></div>
					<div className="links"></div>
				</div>
				<div className="rightSide">
					<div className="block">
						<div className="left">
							<span className="icon"><IoLocationOutline /></span>
						</div>
						<div className="right">
							<span className='text'>UK</span>
						</div>
					</div>
					<div className="block">
						<div className="left">
							<span className="icon"><TbGenderMale /></span>
						</div>
						<div className="right">
							<span className="text">Male</span>
						</div>
					</div>
					<div className="block">
						<div className="left">
							<span className="icon"><IoSchoolOutline /></span>
						</div>
						<div className="right">
							<span className="text">College</span>
						</div>
					</div>
					<div className="block">
						<div className="left">
							<span className="icon"><GrFavorite /></span>
						</div>
						<div className="right">
							<span className="text">Design</span>
						</div>
					</div>
					<div className="block">
						<div className="left">
							<span className="icon work"><MdOutlineWorkOutline /></span>
						</div>
						<div className="right">
							<span className="text">Available for work</span>

						</div>
					</div>
				</div>


			</div>
		</div>
	);
}