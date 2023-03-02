import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Checkbox,
    Divider,
    FormControlLabel,
    List,
    ListItem,
    Paper,
    useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { theme } from './../ui/theme';
// import { useState } from "react";

function CategoriesColumn({ tags, setSelectedTags, selectedTags, handleSelect }) {

    /*     const Desktop = useMediaQuery('(min-width:1200px)');
        const Ipad = useMediaQuery('(min-width:1000px)');
        const Mobile = useMediaQuery('(min-width:800px)');
     */

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    open
                    expandIcon={<ExpandMoreIcon />}>
                    <h4>انتخاب گروه</h4>
                </AccordionSummary>
                <AccordionDetails>

                    <List>
                        {tags.slice(0, 10).map((tag) => (
                            <div key={`tag${tag.slug}`}>
                                <ListItem>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={selectedTags.includes(tag)}
                                                onChange={(event) =>
                                                    handleSelect(event.target.checked, tag)
                                                }
                                            />
                                        }
                                        label={tag.name}
                                    />
                                </ListItem>
                                <Divider component={"li"} variant="middle" />
                            </div>
                        ))}
                    </List>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default CategoriesColumn;
