"use client"
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Timeline(props) {
    const { elements = [] } = props;

    function TimelineElement(title, location, description, time) {
        return (
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                textClassName="timelineHover"
                contentStyle={{ background: '#e19d9d', color: '#fff' }}
                // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={time}
                iconStyle={{ background: '#e19d9d', color: '#fff' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">{title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{location}</h4>
                <p>{description}</p>
            </VerticalTimelineElement>
        );
    }

    return (
        <VerticalTimeline layout={"1-column-left"}>
            {elements.map(element => {
                return TimelineElement(element.title, element.location, element.description, element.time)
            })}
            {/* <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                // icon={<StarIcon />}
            /> */}
            </VerticalTimeline>
    );
}