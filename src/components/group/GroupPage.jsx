import React, { useEffect, useState } from "react";
import { Card, Form, ListGroup, ListGroupItem, Tab, Tabs } from "react-bootstrap";
import { Link, NavLink, useParams } from "react-router-dom";
import { getRelatedGroups, getSpecificGroup } from './../../services/service';

function GroupPage() {

    const { groupSlug } = useParams();

    const [group, setGroup] = useState({});
    const [relatedGroups, setRelatedGroups] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: groupData } = await getSpecificGroup(groupSlug);
                const { data: relatedGroupsData } = await getRelatedGroups(groupSlug);

                setGroup(groupData);
                setRelatedGroups(relatedGroupsData);
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchData();
    }, [groupSlug]);

    return (
        <div className="row mt-4">
            <section className="col-12 col-sm-9">
                <div className="d-flex justify-content-start align-items-center">
                    <img
                        src="/images/telegram.png"
                        alt="telegram"
                        height={150}
                        width={150}
                    />
                    <div>
                        <h3>{group.name}</h3>
                        <div className="d-flex mt-4">
                            <a href={group.link} target="_blank">
                                <button className="btn btn-outline-success">لینک کانال</button>
                            </a>
                            <button className="btn btn-outline-primary me-2">
                                ادمین کانال
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <Tabs
                        defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                        className="mb-3 w-100 p-0"
                    >
                        <Tab eventKey="home" title="توضیحات">
                            <p>
                                {group.description}
                            </p>
                        </Tab>
                        <Tab eventKey="profile" title="نظرات">
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
                                طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
                                فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                                موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
                                نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                                دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </p>
                        </Tab>
                    </Tabs>
                </div>
            </section>
            <section className="col-12 col-sm-3">
                <Card className="mb-4 mt-4">
                    <Card.Header style={{ backgroundColor: "#fff" }}>
                        <Card.Title>
                            گروه های مرتبط
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <ListGroup variant="flush">
                            {relatedGroups.slice(0, 10).map((tag) => (
                                <ListGroupItem key={tag.slug}>
                                    <Link to={`/group/${tag.slug}`} style={{ textDecoration: 'none' }}>
                                        {tag.name}
                                    </Link>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Card.Body>
                </Card>
            </section>
        </div>
    );
}

export default GroupPage;
